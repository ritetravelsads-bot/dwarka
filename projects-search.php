<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
require_once __DIR__ . '/config.php';

$pageTitle = 'Find Your Perfect Property on Dwarka Expressway';
$pageDescription = 'Search verified residential and commercial projects on Dwarka Expressway with advanced filters and sort options.';

function makeSlug(string $value): string
{
    return strtolower(trim((string)preg_replace('/[^A-Za-z0-9]+/', '-', $value), '-'));
}

function parsePriceToCr($value): float
{
    $text = strtolower((string)$value);
    $compact = str_replace([',', 'inr', 'rs.', 'rs', ' ', '*'], '', $text);
    $compact = str_replace(['₹', '&#8377;', '&nbsp;'], '', $compact);
    $compact = trim($compact);

    if ($compact === '') {
        return 0.0;
    }

    if (!preg_match('/([0-9]+(?:\.[0-9]+)?)/', $compact, $match)) {
        return 0.0;
    }

    $number = (float)$match[1];
    if ($number <= 0) {
        return 0.0;
    }

    if (strpos($compact, 'crore') !== false || strpos($compact, 'cr') !== false) {
        return $number;
    }
    if (strpos($compact, 'lakh') !== false || strpos($compact, 'lac') !== false || strpos($compact, 'l') !== false) {
        return $number / 100.0;
    }

    if ($number >= 10000000) {
        return $number / 10000000;
    }
    if ($number >= 100000) {
        return $number / 10000000;
    }

    return $number;
}

function formatPriceLabel($rawPrice, float $priceCr): string
{
    if ($priceCr > 0) {
        $formatted = number_format($priceCr, 2, '.', '');
        $formatted = rtrim(rtrim($formatted, '0'), '.');
        return $formatted . ' Cr';
    }

    $raw = trim((string)$rawPrice);
    if ($raw !== '') {
        return $raw;
    }

    return 'On Request';
}

function normalizeProject(array $row, int $i): ?array
{
    $name = trim((string)($row['name'] ?? $row['title'] ?? ''));
    if ($name === '') {
        return null;
    }
    $badgeRaw = strtolower((string)($row['badge'] ?? ''));
    $statusRaw = strtolower(trim((string)($row['status'] ?? $row['constructionStatus'] ?? '')));
    if ($statusRaw === '') {
        $statusRaw = $badgeRaw !== '' ? $badgeRaw : 'under construction';
    }
    $status = strpos($statusRaw, 'ready') !== false ? 'Ready to Move' : 'Under Construction';
    $isNew = strpos($statusRaw, 'new') !== false || strpos($badgeRaw, 'new') !== false || strpos($badgeRaw, 'launch') !== false;
    $occupancy = (int)($row['occupancy'] ?? 0);
    if ($occupancy <= 0) {
        if ($status === 'Ready to Move') {
            $occupancy = 90;
        } elseif ($isNew) {
            $occupancy = 22;
        } else {
            $occupancy = 55;
        }
    }
    $occupancy = max(1, min(99, $occupancy));
    $rawPrice = $row['price'] ?? $row['startingPrice'] ?? '';
    $priceCr = parsePriceToCr($rawPrice);
    $img = (string)($row['image'] ?? ($row['hero']['image'] ?? ''));
    if ($img === '') {
        $img = 'assets/img/proj/p-' . (($i % 12) + 1) . '.webp';
    } elseif (!preg_match('#^(https?:)?//#', $img) && strpos($img, 'assets/') !== 0) {
        $img = 'assets/img/proj/' . ltrim($img, '/');
    }

    $possessionRaw = (string)($row['possessionDate'] ?? ($row['hero']['possession'] ?? '2030-12-01'));
    $possessionTs = strtotime($possessionRaw);
    if ($possessionTs === false) {
        $possessionTs = strtotime('2030-12-01');
    }

    return [
        'name' => $name,
        'slug' => (string)($row['slug'] ?? makeSlug($name)),
        'location' => (string)($row['location'] ?? 'Dwarka Expressway'),
        'fullLocation' => (string)($row['location'] ?? 'Dwarka Expressway') . ', Dwarka Expressway, Gurugram',
        'propertyType' => ucfirst(strtolower((string)($row['propertyType'] ?? $row['type'] ?? 'Residential'))),
        'configuration' => (string)($row['configuration'] ?? $row['unitType'] ?? '2/3/4 BHK'),
        'priceCr' => max(0, $priceCr),
        'priceLabel' => formatPriceLabel($rawPrice, $priceCr),
        'status' => $status,
        'isNewLaunch' => $isNew,
        'occupancy' => $occupancy,
        'description' => (string)($row['description'] ?? ($row['about']['content'] ?? 'Premium residential apartments designed with modern architecture, spacious layouts, and world-class amenities in a prime location.')),
        'image' => $img,
        'highlights' => array_values(array_slice((array)($row['highlights'] ?? ['Close to IGI Airport', 'High ROI Potential', 'Premium Amenities']), 0, 3)),
        'possessionTs' => $possessionTs
    ];
}

function fetchBackendProjects(): array
{
    $endpoint = 'https://dwarkaexpresswayncr-backend.onrender.com/api/projects';
    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'timeout' => 8,
            'header' => "Accept: application/json\r\nUser-Agent: DwarkaProjectsPage/1.0\r\n",
            'ignore_errors' => true
        ]
    ]);
    $response = @file_get_contents($endpoint, false, $context);
    if (!$response) {
        return [];
    }
    $json = json_decode($response, true);
    if (!is_array($json)) {
        return [];
    }

    $rows = [];
    if (isset($json[0]) && is_array($json[0])) {
        $rows = $json;
    } elseif (isset($json['data']) && is_array($json['data'])) {
        $rows = $json['data'];
    } elseif (isset($json['projects']) && is_array($json['projects'])) {
        $rows = $json['projects'];
    }

    $out = [];
    foreach ($rows as $i => $row) {
        if (!is_array($row)) {
            continue;
        }
        $normalized = normalizeProject($row, $i);
        if ($normalized) {
            $out[] = $normalized;
        }
    }
    return $out;
}

$fallback = [
    [
        'name' => 'Whiteland Westin Residences',
        'location' => 'Sector 103',
        'price' => '5.5 Cr',
        'image' => 'p-1.webp',
        'badge' => 'Branded Residences',
        'badgeColor' => 'bg-primary',
        'occupancy' => 65,
        'alt' => 'Whiteland Westin Residences in Sector 103'
      ],
      [
        'name' => 'Godrej Vrikshya',
        'location' => 'Sector 103',
        'price' => '3.6 Cr',
        'image' => 'p-2.webp',
        'badge' => 'Forest-themed Living',
        'badgeColor' => 'bg-primary',
        'occupancy' => 82,
        'alt' => 'Godrej Vrikshya in Sector 103'
      ],
      [
        'name' => 'Signature Global De Luxe DXP',
        'location' => 'Sector 37D',
        'price' => '3.5 Cr',
        'image' => 'p-3.webp',
        'badge' => 'High-rise Development',
        'badgeColor' => 'bg-primary',
        'occupancy' => 98,
        'alt' => 'Signature Global De Luxe DXP in Sector 37D'
      ],
      [
        'name' => 'Hero Homes The Palatial',
        'location' => 'Sector 104',
        'price' => '1.8 Cr',
        'image' => 'p-4.webp',
        'badge' => 'Near Completion',
        'badgeColor' => 'bg-primary',
        'occupancy' => 92,
        'alt' => 'Hero Homes in Sector 104'
      ],
      [
        'name' => 'M3M Capital',
        'location' => 'Sector 113',
        'price' => '5.2 Cr',
        'image' => 'p-5.webp',
        'badge' => 'Possession (Dec 2026)',
        'badgeColor' => 'bg-primary',
        'occupancy' => 88,
        'alt' => 'M3M Capital in Sector 113'
      ],
      [
        'name' => 'Elan The Presidential',
        'location' => 'Sector 106',
        'price' => '6.5 Cr',
        'image' => 'p-6.webp',
        'badge' => 'Ultra-Luxury Living',
        'badgeColor' => 'bg-primary',
        'occupancy' => 78,
        'alt' => 'Elan The Presidential in Sector 106'
      ],
      [
        'name' => 'M3M Crown',
        'location' => 'Sector 111',
        'price' => '4.5 Cr',
        'image' => 'p-7.webp',
        'badge' => 'Under Construction (2028)',
        'badgeColor' => 'bg-primary',
        'occupancy' => 85,
        'alt' => 'M3M Crown in Sector 111'
      ],
      [
        'name' => 'Smartworld One DXP',
        'location' => 'Sector 113',
        'price' => '3.5 Cr',
        'image' => 'p-8.webp',
        'badge' => 'Under Construction (2027)',
        'badgeColor' => 'bg-primary',
        'occupancy' => 90,
        'alt' => 'Smartworld One DXP in Sector 113'
      ],
      [
        'name' => 'Puri Diplomatic Residences',
        'location' => 'Sector 111',
        'price' => '4.2 Cr',
        'image' => 'p-9.webp',
        'badge' => 'Exclusive Launch',
        'badgeColor' => 'bg-primary',
        'occupancy' => 60,
        'alt' => 'Puri Diplomatic Residences in Sector 111'
      ],
      [
        'name' => 'Sobha Altus',
        'location' => 'Sector 106',
        'price' => '5.0 Cr',
        'image' => 'p-10.webp',
        'badge' => 'Premium High-rise',
        'badgeColor' => 'bg-primary',
        'occupancy' => 55,
        'alt' => 'Sobha Altus in Sector 106'
      ],
      [
        'name' => 'BPTP Amstoria Verti Greens',
        'location' => 'Sector 102',
        'price' => '3.5 Cr',
        'image' => 'p-11.webp',
        'badge' => 'Ultra-Luxury Living',
        'badgeColor' => 'bg-primary',
        'occupancy' => 12,
        'alt' => 'BPTP Verti Greens in Sector 102'
      ],
      [
        'name' => 'M3M Elie Saab',
        'location' => 'Sector 111',
        'price' => '14 Cr',
        'image' => 'p-12.webp',
        'badge' => 'Branded Residences',
        'badgeColor' => 'bg-primary',
        'occupancy' => 15,
        'alt' => 'M3M Elie Saab Luxury Apartments in Sector 111'
      ],
      [
        'name' => 'BPTP Gaia',
        'location' => 'Sector 102',
        'price' => '4.21 Cr',
        'image' => 'p-13.webp',
        'badge' => 'New Launch (2032)',
        'badgeColor' => 'bg-primary',
        'occupancy' => 10,
        'alt' => 'BPTP Gaia Residences in Sector 102'
      ],
      [
        'name' => 'Landmark The Residency',
        'location' => 'Sector 103',
        'price' => '1.3 Cr',
        'image' => 'p-14.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 90,
        'alt' => 'Landmark The Residency in Sector 103'
      ],
      [
        'name' => 'Adani Realty Iconic Towers',
        'location' => 'Sector 102',
        'price' => '12 Cr',
        'image' => 'p-15.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 88,
        'alt' => 'Adani Oyster Grande Luxury Penthouse Sector 102'
      ],
      [
        'name' => 'HCBS Twin Horizon',
        'location' => 'Sector 102',
        'price' => '4.11 Cr',
        'image' => 'p-16.webp',
        'badge' => 'Under Construction (2028)',
        'badgeColor' => 'bg-primary',
        'occupancy' => 22,
        'alt' => 'HCBS Twin Horizon Sector 102'
      ],
      [
        'name' => 'Central Park Delphine',
        'location' => 'Sector 104',
        'price' => '9 Cr',
        'image' => 'p-17.webp',
        'badge' => 'Luxury High-rise',
        'badgeColor' => 'bg-primary',
        'occupancy' => 8,
        'alt' => 'Central Park Delphine in Sector 104'
      ],
      [
        'name' => 'AIPL Riviera Lake City',
        'location' => 'Sector 103',
        'price' => '2.8 Cr',
        'image' => 'p-18.webp',
        'badge' => 'Lake-facing Living',
        'badgeColor' => 'bg-primary',
        'occupancy' => 5,
        'alt' => 'AIPL Riviera Lake City Sector 103'
      ],
      [
        'name' => 'Tata Raisina Residency',
        'location' => 'Sector 59',
        'price' => '5.5 Cr',
        'image' => 'p-19.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 95,
        'alt' => 'Tata Raisina Residency Sector 59'
      ],
      [
        'name' => 'Mahindra Luminare',
        'location' => 'Sector 59',
        'price' => '7.9 Cr',
        'image' => 'p-20.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 85,
        'alt' => 'Mahindra Luminare Sector 59'
      ],
      [
        'name' => 'Shapoorji Pallonji Joyville',
        'location' => 'Sector 102',
        'price' => '2.1 Cr',
        'image' => 'p-21.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 92,
        'alt' => 'Joyville by Shapoorji Pallonji Sector 102'
      ],
      [
        'name' => 'Omaxe New Heights',
        'location' => 'Sector 78',
        'price' => '1.8 Cr',
        'image' => 'p-22.webp',
        'badge' => 'Established Society',
        'badgeColor' => 'bg-primary',
        'occupancy' => 94,
        'alt' => 'Omaxe New Heights Sector 78'
      ],
      [
        'name' => 'Sobha City',
        'location' => 'Sector 108',
        'price' => '1.95 Cr',
        'image' => 'p-23.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 96,
        'alt' => 'Sobha City Sector 108 Dwarka Expressway'
      ],
      [
        'name' => 'Emaar Palm Hills',
        'location' => 'Sector 77',
        'price' => '3.4 Cr',
        'image' => 'p-24.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 90,
        'alt' => 'Emaar Palm Hills Sector 77'
      ],
      [
        'name' => 'Godrej Meridien',
        'location' => 'Sector 106',
        'price' => '4.8 Cr',
        'image' => 'p-25.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 88,
        'alt' => 'Godrej Meridien Sector 106'
      ],
      [
        'name' => 'Godrej Summit',
        'location' => 'Sector 104',
        'price' => '9.25 Cr',
        'image' => 'p-26.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 98,
        'alt' => 'Godrej Summit Sector 104'
      ],
      [
        'name' => 'DLF The Ultima',
        'location' => 'Sector 81',
        'price' => '7.25 Cr',
        'image' => 'p-27.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 94,
        'alt' => 'DLF The Ultima Sector 81'
      ],
      [
        'name' => 'DLF The Sky Court',
        'location' => 'Sector 86',
        'price' => '2.5 Cr',
        'image' => 'p-28.webp',
        'badge' => 'Ready to Move',
        'badgeColor' => 'bg-primary',
        'occupancy' => 92,
        'alt' => 'DLF The Sky Court Sector 86'
      ],
      [
        'name' => 'Omaxe Dwarka Heights',
        'location' => 'Sector 19B Dwarka',
        'price' => '1.45 Cr',
        'image' => 'p-29.webp',
        'badge' => 'Under Construction',
        'badgeColor' => 'bg-primary',
        'occupancy' => 40,
        'alt' => 'Omaxe Dwarka Heights Sector 19B'
      ],
];

$projects = fetchBackendProjects();
if (empty($projects)) {
    $projects = [];
    foreach ($fallback as $i => $row) {
        $normalized = normalizeProject((array)$row, $i);
        if ($normalized) {
            $projects[] = $normalized;
        }
    }
}

$locations = array_values(array_unique(array_map(static function ($p) {
    return (string)$p['location'];
}, $projects)));
sort($locations);
?>
<?php include 'inc/head.php'; ?>
<?php include 'inc/header.php'; ?>

<main class="pt-20">
    <section class="relative min-h-auto md:min-h-[400px] overflow-hidden ">
        <img src="assets/img/dwarka-banner-1.webp" alt="Dwarka Expressway Property Search" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80"></div>
        <div class="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
            <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">Find Your Perfect Property on Dwarka Expressway</h1>
            <p class="text-white/85 mt-5 max-w-4xl mx-auto text-sm md:text-lg leading-relaxed">Explore a wide range of premium residential and commercial projects located along Dwarka Expressway NCR. Use advanced search filters to discover properties that match your budget, location, and lifestyle preferences-all in one place.</p>

        </div>
    </section>
    
   <section class="sticky top-10 z-30 bg-white/10 backdrop-blur-xl border-b border-slate-200">
        <div class="container mx-auto px-4 pt-10">
            <form id="projectSearchForm" class="max-w-6xl mx-auto">
                <div class="rounded-2xl shadow p-6 bg-white border border-borderGrey">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="relative">
                            <input id="projectNameSearch" type="text" placeholder="Search Project Name" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                            <ul id="projectNameSuggestions" class="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-lg hidden max-h-40 overflow-y-auto shadow-lg"></ul>
                        </div>

                        <input id="projectLocationSearch" type="text" placeholder="Search Sector / Location" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">

                        <select id="projectBudgetSearch" class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option value="">Select Budget</option>
                            <option value="1-2.5">&#8377;1 Cr to &#8377;2.5 Cr</option>
                            <option value="2.5-5">&#8377;2.5 - &#8377;5 Cr</option>
                            <option value="5-6">&#8377;5 - &#8377;6 Cr</option>
                            <option value="6+">Above &#8377;6 Cr</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section class="bg-lightGrey py-6 border-b border-borderGrey">
        <div class="container mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div id="resultsText" class="text-dark font-semibold">Showing 0 Projects matching your search</div>
            <div class="flex items-center gap-3">
                <label for="sortBy" class="text-sm text-slate-700 font-semibold">Sort By</label>
                <select id="sortBy" class="rounded-lg border border-borderGrey px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="new">New Launch</option>
                    <option value="possession">Possession Date</option>
                </select>
            </div>
        </div>
    </section>

    <section class="py-14 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div id="projectGrid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"></div>
            <div id="emptyState" class="hidden mt-10 rounded-2xl border border-borderGrey bg-lightGrey p-10 text-center">
                <h3 class="text-2xl font-bold text-dark">No projects found matching your criteria.</h3>
                <p class="text-slate-600 mt-2">Try adjusting your filters or explore all available projects.</p>
                <button id="resetFilters" type="button" class="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">Reset Filters</button>
            </div>
        </div>
    </section>

    <section class="py-16 bg-lightGrey border-t border-borderGrey">
        <div class="container mx-auto px-4 md:px-6">
            <h2 class="text-3xl md:text-4xl font-bold text-dark mb-8">Why Choose Us to Find Your Property?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white rounded-xl border border-borderGrey p-6 flex items-start gap-4"><i class="fa-solid fa-shield-halved text-primary text-xl mt-1"></i><p class="text-slate-700 font-medium">Verified listings with accurate information</p></div>
                <div class="bg-white rounded-xl border border-borderGrey p-6 flex items-start gap-4"><i class="fa-solid fa-building-shield text-primary text-xl mt-1"></i><p class="text-slate-700 font-medium">Prime projects from trusted developers</p></div>
                <div class="bg-white rounded-xl border border-borderGrey p-6 flex items-start gap-4"><i class="fa-solid fa-sliders text-primary text-xl mt-1"></i><p class="text-slate-700 font-medium">Easy comparison and filtering options</p></div>
                <div class="bg-white rounded-xl border border-borderGrey p-6 flex items-start gap-4"><i class="fa-solid fa-headset text-primary text-xl mt-1"></i><p class="text-slate-700 font-medium">Expert assistance for site visits and booking</p></div>
            </div>
            <p class="text-slate-700 leading-relaxed max-w-5xl">We simplify your property search by bringing all premium projects on Dwarka Expressway into one platform. With advanced filters and real-time data, you can make confident and informed decisions.</p>
        </div>
    </section>

    <section class="py-16 bg-dark text-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="rounded-2xl border border-white/10 bg-gradient-to-r from-[#1f1f1f] to-[#101010] p-8 md:p-12">
                <h2 class="text-3xl md:text-4xl font-bold">Need Help Finding the Right Property?</h2>
                <p class="text-white/80 mt-4 max-w-3xl">Our experts are here to guide you through every step-from shortlisting the right project to booking your dream property.</p>
                <div class="mt-8 flex flex-wrap gap-4">
                    <a href="/contact.php" class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">Talk to Expert <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="/contact.php" class="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all">Schedule Site Visit <i class="fa-solid fa-calendar-days"></i></a>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
const allProjects = <?php echo json_encode($projects, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>;
const state = { sortBy: 'low' };

const form = document.getElementById('projectSearchForm');
const projectInput = document.getElementById('projectNameSearch');
const locationInput = document.getElementById('projectLocationSearch');
const budgetInput = document.getElementById('projectBudgetSearch');
const suggestions = document.getElementById('projectNameSuggestions');
const sortBy = document.getElementById('sortBy');
const grid = document.getElementById('projectGrid');
const resultsText = document.getElementById('resultsText');
const emptyState = document.getElementById('emptyState');
const resetBtn = document.getElementById('resetFilters');
const projectNames = Array.from(new Set(allProjects.map((p) => (p.name || '').trim()).filter(Boolean)));

function esc(v) {
    return String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function toNumber(v) {
    const n = parseFloat(v || 0);
    return Number.isFinite(n) ? n : 0;
}

function matchesBudget(price, budgetValue) {
    if (!budgetValue) return true;
    if (budgetValue === '1-2.5') return price >= 1 && price <= 2.5;
    if (budgetValue === '2.5-5') return price >= 2.5 && price <= 5;
    if (budgetValue === '5-6') return price > 5 && price <= 6;
    if (budgetValue === '6+') return price > 6;
    return true;
}

function getBadge(p) {
    if (p.isNewLaunch) return 'New Launch';
    return String(p.status || '').includes('Ready') ? 'Ready to Move' : 'Under Construction';
}

function getOccupancy(p) {
    const val = Math.round(toNumber(p.occupancy || 0));
    if (val > 0) return Math.max(1, Math.min(99, val));
    if ((p.status || '').toLowerCase().includes('ready')) return 90;
    if (p.isNewLaunch) return 20;
    return 55;
}

function renderSuggestions() {
    const value = (projectInput.value || '').toLowerCase().trim();
    if (!value) {
        suggestions.classList.add('hidden');
        suggestions.innerHTML = '';
        return;
    }

    const filtered = projectNames.filter((name) => name.toLowerCase().includes(value)).slice(0, 8);
    if (!filtered.length) {
        suggestions.classList.add('hidden');
        suggestions.innerHTML = '';
        return;
    }

    suggestions.innerHTML = filtered
        .map((name) => `<li class="px-4 py-2 hover:bg-primary/10 cursor-pointer transition">${esc(name)}</li>`)
        .join('');
    suggestions.classList.remove('hidden');

    suggestions.querySelectorAll('li').forEach((li) => {
        li.addEventListener('click', function () {
            projectInput.value = this.textContent.trim();
            suggestions.classList.add('hidden');
            applyFilters();
        });
    });
}

function applyFilters() {
    const projectValue = (projectInput.value || '').toLowerCase().trim();
    const locationValue = (locationInput.value || '').toLowerCase().trim();
    const budgetValue = budgetInput.value || '';

    let rows = allProjects.filter((p) => {
        const name = (p.name || '').toLowerCase();
        const location = (p.location || '').toLowerCase();
        const price = toNumber(p.priceCr);

        const projectMatch = !projectValue || name.includes(projectValue);
        const locationMatch = !locationValue || location.includes(locationValue);
        const budgetMatch = matchesBudget(price, budgetValue);

        return projectMatch && locationMatch && budgetMatch;
    });

    rows.sort((a, b) => {
        if (state.sortBy === 'low') return toNumber(a.priceCr) - toNumber(b.priceCr);
        if (state.sortBy === 'high') return toNumber(b.priceCr) - toNumber(a.priceCr);
        if (state.sortBy === 'new') return Number(Boolean(b.isNewLaunch)) - Number(Boolean(a.isNewLaunch));
        if (state.sortBy === 'possession') return parseInt(a.possessionTs || 0, 10) - parseInt(b.possessionTs || 0, 10);
        return 0;
    });

    resultsText.textContent = 'Showing ' + rows.length + ' Projects matching your search';

    if (!rows.length) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');
    grid.innerHTML = rows.map((p) => {
        const badge = getBadge(p);
        const occupancy = getOccupancy(p);
        const dashOffset = 100 - occupancy;
        return `
            <a href="/${esc(p.slug || '')}" class="group bg-white rounded-2xl shadow-lg overflow-hidden project-card transition-transform hover:-translate-y-1 block">
                <div class="relative">
                    <img src="${esc(p.image || 'assets/img/proj/p-1.webp')}" alt="${esc(p.name)}" class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105">
                    <span class="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">${esc(badge)}</span>
                </div>
                <div class="p-5">
                    <div class="flex justify-between items-start gap-2">
                        <div class="space-y-1 flex-1">
                            <h3 class="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">${esc(p.name)}</h3>
                            <p class="text-xs text-gray-500 flex items-center">
                                <i class="fa-solid fa-location-dot mr-1"></i>
                                ${esc(p.location || 'Dwarka Expressway')}
                            </p>
                            <p class="text-lg font-bold text-red-700 pt-1">&#8377; ${esc(p.priceLabel || 'On Request')}*</p>
                        </div>

                        <div class="flex flex-col items-center justify-center min-w-[60px]">
                            <div class="relative w-12 h-12">
                                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#e5e7eb" stroke-width="4"></circle>
                                    <circle cx="20" cy="20" r="15.915" fill="transparent" stroke="#15803d" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="${dashOffset}" stroke-linecap="round"></circle>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-[10px] font-bold text-gray-700">${occupancy}%</span>
                                </div>
                            </div>
                            <span class="text-[9px] uppercase font-bold text-gray-400 mt-1">Occupancy</span>
                        </div>
                    </div>

                    <hr class="my-3 border-gray-100">

                    <div class="flex justify-between items-center">
                        <span class="text-primary font-bold text-xs uppercase group-hover:underline">View Details</span>
                        <i class="fa-solid fa-arrow-right text-primary text-xs transform group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilters();
});

projectInput.addEventListener('input', () => {
    renderSuggestions();
    applyFilters();
});

locationInput.addEventListener('input', applyFilters);
budgetInput.addEventListener('change', applyFilters);

document.addEventListener('click', (event) => {
    if (!projectInput || !suggestions) return;
    if (event.target === projectInput || suggestions.contains(event.target)) return;
    suggestions.classList.add('hidden');
});

sortBy.addEventListener('change', function () {
    state.sortBy = this.value;
    applyFilters();
});

resetBtn.addEventListener('click', () => {
    form.reset();
    state.sortBy = 'low';
    sortBy.value = 'low';
    if (suggestions) {
        suggestions.classList.add('hidden');
        suggestions.innerHTML = '';
    }
    applyFilters();
});

applyFilters();
</script>

<?php include 'inc/footer.php'; ?>
