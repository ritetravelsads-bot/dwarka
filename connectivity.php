<?php
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
require_once __DIR__ . '/config.php';
$recaptchaSiteKey = getenv('RECAPTCHA_SITE_KEY') ?: '';
if (empty($_SESSION['form_token']) || !is_string($_SESSION['form_token'])) {
    $_SESSION['form_token'] = bin2hex(random_bytes(32));
}
$formToken = $_SESSION['form_token'];

$pageTitle = 'Dwarka Expressway Map & Connectivity | Prime Real Estate in Delhi NCR';
$pageDescription = 'Explore the Dwarka Expressway map with projects, seamless connectivity to IGI Airport, NH-48, and luxury apartments on Dwarka Expressway. Discover ready to move flats and upcoming commercial projects in Gurgaon.';

// Property Data Array with connectivity points
$properties = [
    ['name' => 'Signature Global Sarvam', 'sector' => 'Sector 37D', 'price' => '₹ 2.81 Cr*', 'occupancy' => '70%', 'tag' => 'Branded Residences', 'dxp_conn' => 'Located just 2 mins from the Dwarka Expressway cloverleaf, offering rapid, signal-free access to NH-48.'],
    ['name' => 'Whiteland Westin Residences', 'sector' => 'Sector 103', 'price' => '₹ 5.5 Cr*', 'occupancy' => '65%', 'tag' => 'Forest-themed Living', 'dxp_conn' => 'Direct frontage on Dwarka Expressway, ensuring a smooth 15-minute drive directly to IGI Airport.'],
    ['name' => 'Godrej Vrikshya', 'sector' => 'Sector 103', 'price' => '₹ 3.6 Cr*', 'occupancy' => '82%', 'tag' => 'High-rise Development', 'dxp_conn' => 'Zero-kilometer access to the main carriageway, providing seamless transit to upcoming commercial projects in Gurgaon.'],
    ['name' => 'Signature Global De Luxe DXP', 'sector' => 'Sector 37D', 'price' => '₹ 3.5 Cr*', 'occupancy' => '98%', 'tag' => 'Near Completion', 'dxp_conn' => 'Strategically placed near the CPR and Dwarka Expressway junction for multi-directional city connectivity.'],
    ['name' => 'Hero Homes The Palatial', 'sector' => 'Sector 104', 'price' => '₹ 1.8 Cr*', 'occupancy' => '92%', 'tag' => 'Possession (Dec 2026)', 'dxp_conn' => 'Sits right along the expressway, offering rapid connectivity to the Delhi border and nearby social infrastructure.'],
    ['name' => 'M3M Capital', 'sector' => 'Sector 113', 'price' => '₹ 5.2 Cr*', 'occupancy' => '88%', 'tag' => 'Ultra-Luxury Living', 'dxp_conn' => 'First sector on the Gurgaon side, providing literally zero-minute access to Delhi via the expressway.'],
    ['name' => 'Elan The Presidential', 'sector' => 'Sector 106', 'price' => '₹ 6.5 Cr*', 'occupancy' => '78%', 'tag' => 'Under Construction (2028)', 'dxp_conn' => 'Prime expressway frontage with upcoming infrastructure and quick routes to Sector 21 Metro.'],
    ['name' => 'M3M Crown', 'sector' => 'Sector 111', 'price' => '₹ 4.5 Cr*', 'occupancy' => '85%', 'tag' => 'Under Construction (2027)', 'dxp_conn' => 'Bordering Delhi, offering one of the shortest commute times to Yashobhoomi (IICC) and the airport.'],
    ['name' => 'Smartworld One DXP', 'sector' => 'Sector 113', 'price' => '₹ 3.5 Cr*', 'occupancy' => '90%', 'tag' => 'Exclusive Launch', 'dxp_conn' => 'Immediate Dwarka Express Highway access, perfectly positioning it between Gurugram IT hubs and Delhi.'],
    ['name' => 'Puri Diplomatic Residences', 'sector' => 'Sector 111', 'price' => '₹ 4.2 Cr*', 'occupancy' => '60%', 'tag' => 'Premium High-rise', 'dxp_conn' => 'Located at the Delhi-Gurgaon toll plaza equivalent, making interstate travel entirely frictionless.'],
    ['name' => 'Sobha Altus', 'sector' => 'Sector 106', 'price' => '₹ 5.0 Cr*', 'occupancy' => '55%', 'tag' => 'Ultra-Luxury Living', 'dxp_conn' => 'Direct access to the expressway’s service lanes, bypassing internal sector traffic entirely.'],
    ['name' => 'BPTP Amstoria Verti Greens', 'sector' => 'Sector 102', 'price' => '₹ 3.5 Cr*', 'occupancy' => '12%', 'tag' => 'Branded Residences', 'dxp_conn' => 'Connected via a wide sector road directly merging onto the Dwarka Expressway within 2 minutes.'],
    ['name' => 'M3M Elie Saab', 'sector' => 'Sector 111', 'price' => '₹ 14 Cr*', 'occupancy' => '15%', 'tag' => 'New Launch (2032)', 'dxp_conn' => 'Unmatched gateway location on the expressway, mere minutes from the Delhi boundary line.'],
    ['name' => 'BPTP Gaia', 'sector' => 'Sector 102', 'price' => '₹ 4.21 Cr*', 'occupancy' => '10%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Located centrally along the corridor with quick on-ramp access for northbound and southbound travel.'],
    ['name' => 'Landmark The Residency', 'sector' => 'Sector 103', 'price' => '₹ 1.3 Cr*', 'occupancy' => '90%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Benefits from the completed expressway stretches, ensuring a 20-minute drive to Cyber City.'],
    ['name' => 'Adani Realty Iconic Towers', 'sector' => 'Sector 102', 'price' => '₹ 12 Cr*', 'occupancy' => '88%', 'tag' => 'Under Construction (2028)', 'dxp_conn' => 'Premium connectivity via a dedicated sector road linking straight to the expressway mainline.'],
    ['name' => 'HCBS Twin Horizon', 'sector' => 'Sector 102', 'price' => '₹ 4.11 Cr*', 'occupancy' => '22%', 'tag' => 'Luxury High-rise', 'dxp_conn' => 'Strategically positioned for quick access to the upcoming commercial malls in Dwarka Expressway.'],
    ['name' => 'Central Park Delphine', 'sector' => 'Sector 104', 'price' => '₹ 9 Cr*', 'occupancy' => '8%', 'tag' => 'Lake-facing Living', 'dxp_conn' => 'Features swift access points to the expressway, avoiding the older, congested Gurgaon routes.'],
    ['name' => 'AIPL Riviera Lake City', 'sector' => 'Sector 103', 'price' => '₹ 2.8 Cr*', 'occupancy' => '5%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Seamless merging onto the expressway, offering an uninterrupted drive to major business hubs.'],
    ['name' => 'Tata Raisina Residency', 'sector' => 'Sector 59', 'price' => '₹ 5.5 Cr*', 'occupancy' => '95%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Connects to Dwarka Expressway via the Southern Peripheral Road (SPR), creating a fast transit loop.'],
    ['name' => 'Mahindra Luminare', 'sector' => 'Sector 59', 'price' => '₹ 7.9 Cr*', 'occupancy' => '85%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Utilizes Golf Course Ext. Road to link effortlessly with SPR and subsequently the Dwarka Expressway.'],
    ['name' => 'Shapoorji Pallonji Joyville', 'sector' => 'Sector 102', 'price' => '₹ 2.1 Cr*', 'occupancy' => '92%', 'tag' => 'Established Society', 'dxp_conn' => 'Directly off the expressway, providing a quick 10-minute commute to Hero Honda Chowk.'],
    ['name' => 'Omaxe New Heights', 'sector' => 'Sector 78', 'price' => '₹ 1.8 Cr*', 'occupancy' => '94%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Connects to the expressway via NH-48 and SPR intersections, offering excellent city-wide mobility.'],
    ['name' => 'Sobha City', 'sector' => 'Sector 108', 'price' => '₹ 1.95 Cr*', 'occupancy' => '96%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Prime 39-acre development with immediate access to the expressway for a 15-minute airport run.'],
    ['name' => 'Emaar Palm Hills', 'sector' => 'Sector 77', 'price' => '₹ 3.4 Cr*', 'occupancy' => '90%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Located near the NH-48 junction, providing easy routing onto the Dwarka Expressway via SPR.'],
    ['name' => 'Godrej Meridien', 'sector' => 'Sector 106', 'price' => '₹ 4.8 Cr*', 'occupancy' => '88%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Features direct access to the main expressway, offering highly efficient daily commutes.'],
    ['name' => 'Godrej Summit', 'sector' => 'Sector 104', 'price' => '₹ 9.25 Cr*', 'occupancy' => '98%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Enjoys proximity to the expressway while maintaining a quiet sector buffer for residential peace.'],
    ['name' => 'DLF The Ultima', 'sector' => 'Sector 81', 'price' => '₹ 7.25 Cr*', 'occupancy' => '94%', 'tag' => 'Ready to Move', 'dxp_conn' => 'Links to the Dwarka Expressway through wide New Gurgaon sector roads and the NH-48 cloverleaf.'],
    ['name' => 'DLF The Sky Court', 'sector' => 'Sector 86', 'price' => '₹ 2.5 Cr*', 'occupancy' => '92%', 'tag' => 'Under Construction', 'dxp_conn' => 'Connects smoothly to the expressway via the multi-utility corridor, avoiding inner-city traffic.'],
    ['name' => 'Omaxe Dwarka Heights', 'sector' => 'Sector 19B Dwarka', 'price' => '₹ 1.45 Cr*', 'occupancy' => 'N/A', 'tag' => 'Delhi Side', 'dxp_conn' => 'Situated at the Delhi end of the expressway, offering ultimate access to Diplomatic Enclave 2.']
];
?>
<?php include 'inc/head.php'; ?>
<?php include 'inc/header.php'; ?>
<main class="text-dark antialiased pt-20">
    <section class="relative pt-12 pb-24 md:pt-10 md:pb-32 bg-gradient-to-br from-slate-900 via-dark to-slate-800 overflow-hidden text-white">
        <div class="absolute inset-0 pointer-events-none z-0 opacity-20">
            <div class="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-[100px]"></div>
            <div class="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/50 blur-[100px]"></div>
        </div>
        
        <div class="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center">
            <div class="max-w-4xl mx-auto">
                <span class="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-white/20 backdrop-blur-sm">Real Estate Dwarka Expressway</span>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                    Seamless <span class="text-primary font-light italic">Connectivity</span> & Projects Map
                </h1>
                <p class="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12 text-center">
                    Positioned at one of the most strategic locations, the Dwarka Express Highway is redefining real estate. Explore the ultimate Dwarka Expressway route map and discover the finest luxury apartments on Dwarka Expressway.
                </p>
                
                <a href="#projects-map" class="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-sm font-bold tracking-wide uppercase rounded hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    View Connectivity Map
                    <i class="fa-solid fa-arrow-down"></i>
                </a>
            </div>
        </div>
    </section>

    <section id="projects-map" class="py-24 bg-white border-b border-borderGrey">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-bold text-dark mb-6 tracking-tight">Dwarka Expressway Map <span class="font-light">With Projects</span></h2>
                <div class="w-16 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                    Visualize your next investment with our comprehensive map. As the <strong>Dwarka Expressway completion date</strong> finalizes, checking the <strong>sector 103 gurgaon map</strong> or <strong>sector 102 gurgaon map</strong> highlights the immense potential of this <strong>Gurgaon smart city</strong> corridor connecting straight to the Delhi border.
                </p>
            </div>
            
            <div class="rounded-2xl overflow-hidden shadow-2xl border border-borderGrey bg-lightGrey p-2 md:p-4">
                <img src="/assets/img/dxp-conn-map.png" alt="Dwarka Expressway route map showcasing luxury apartments on Dwarka Expressway, Elan the presidential 106, and Sector 104 projects" class="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-700">
            </div>
        </div>
    </section>

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <span class="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 border border-primary/20">Project Portfolio</span>
                <h2 class="text-3xl md:text-5xl font-bold text-dark mb-6 tracking-tight">Top 10 Residential Projects in Gurgaon <span class="font-light">& Beyond</span></h2>
                <p class="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                    Browse the finest <strong>residential apartments on Dwarka Expressway</strong>. Every project is uniquely connected to the highway, offering distinct advantages for commuters and investors alike. Discover <strong>Dwarka express highway projects</strong>, pricing, and exact connectivity details below.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php foreach ($properties as $prop): ?>
                <?php 
                    // Dynamically generate the URL slug based on the property name
                    $urlSlug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $prop['name']), '-')); 
                ?>
                <div class="bg-white border border-borderGrey hover:border-primary/50 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                    <div class="p-6 flex-1">
                        <div class="flex justify-between items-start mb-4">
                            <span class="bg-lightGrey text-dark text-xs font-bold px-3 py-1 rounded-md border border-borderGrey/80"><?php echo htmlspecialchars($prop['sector']); ?></span>
                            <span class="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-md"><?php echo htmlspecialchars($prop['tag']); ?></span>
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors"><?php echo htmlspecialchars($prop['name']); ?></h3>
                        <div class="flex items-center gap-4 text-sm text-slate-500 mb-6">
                            <div class="flex items-center gap-1"><i class="fa-solid fa-tag text-primary"></i> <?php echo htmlspecialchars($prop['price']); ?></div>
                            <div class="flex items-center gap-1"><i class="fa-solid fa-building-circle-check text-primary"></i> <?php echo htmlspecialchars($prop['occupancy']); ?> Occupancy</div>
                        </div>
                        
                        <div class="pt-4 border-t border-borderGrey border-dashed">
                            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Expressway Connectivity:</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                <?php echo htmlspecialchars($prop['dxp_conn']); ?>
                            </p>
                        </div>
                    </div>
                    <div class="p-4 bg-lightGrey border-t border-borderGrey/50 text-center">
                        <a href="/<?php echo $urlSlug; ?>" class="text-sm font-bold text-primary hover:text-dark transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
                            View Details <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="py-16 bg-slate-50 border-t border-borderGrey">
        <div class="max-w-5xl mx-auto px-6">
            <h3 class="text-2xl font-bold text-center mb-10 text-dark">Quick Navigation & Neighborhood Insights</h3>
            <div class="grid md:grid-cols-2 gap-8 text-sm text-slate-600">
                <div class="space-y-4">
                    <p><strong>Hotspots to Watch:</strong> Investors are closely tracking the <strong>Sector 88A Gurgaon map</strong>, <strong>Sector 89 Gurgaon map</strong>, and <strong>Sector 80 Gurgaon</strong> for upcoming township developments. Projects like <strong>Smart World One DXP</strong>, <strong>Lotus Homes Dwarka Expressway</strong>, and <strong>ATS Dwarka Expressway</strong> are drawing massive attention.</p>
                    <p><strong>Luxury Enclaves:</strong> Properties such as <strong>Elan The Presidential</strong>, <strong>Sobha International City Sector 109</strong>, and <strong>Mahindra Luminare</strong> set the benchmark. Meanwhile, <strong>The Landmark Apartments</strong> and <strong>BPTP Park</strong> offer exceptional living standards.</p>
                    <p><strong>Pin Codes & Zones:</strong> Navigating the area? The <strong>Sec 102 Gurgaon pin code</strong> (122505) covers major hubs including <strong>BPTP Amstoria Sector 102</strong> and <strong>Shapoorji Pallonji Joyville Sector 102</strong>.</p>
                </div>
                <div class="space-y-4">
                    <p><strong>Affordable & Ready to Move:</strong> Searching for <strong>affordable flats in Dwarka Expressway</strong>? Areas near <strong>Garden City Gurgaon</strong> offer great deals. There's a wide variety of <strong>ready to move apartments in Dwarka Expressway</strong> including <strong>DLF Skycourt Sector 86</strong> and <strong>Skycourt Gurgaon</strong>.</p>
                    <p><strong>Emerging Opportunities:</strong> Keep an eye out for <strong>Adani plots on Dwarka Expressway</strong>, <strong>One Dwarka</strong>, and <strong>Signature Tower 2</strong>. Engaging with trusted <strong>Dwarka Expressway property dealers</strong> is highly recommended to secure the best <strong>Dwarka Expressway flats price</strong>.</p>
                    <p><strong>Featured Developments:</strong> Don't miss <strong>Puri Emerald Bay Sector 104</strong>, <strong>M3M Sector 111 Dwarka Expressway</strong>, and <strong>Godrej Vriksha Sector 103</strong> for prime <strong>new projects in Dwarka</strong> and NCR.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 class="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Ready to Find Your <span class="text-primary font-light italic">Dream Home?</span></h2>
            
            <p class="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12">
                Whether you are seeking <strong>upcoming affordable housing projects in Gurgaon</strong>, tracking <strong>Dwarka Expressway projects ready to move</strong>, or exploring <strong>new township</strong> launches, our experts are here to guide you.
                <br><br>
                Secure your site visit today and get complete <strong>Dwarka Expressway project details</strong>.
            </p>
            
            <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 text-base font-bold tracking-wide uppercase hover:bg-white hover:text-dark transition-all duration-300 shadow-xl shadow-primary/20">
                Contact Real Estate Experts
                <i class="fa-regular fa-calendar-check"></i>
            </a>
        </div>
    </section>
</main>

<?php include 'inc/footer.php'; ?>