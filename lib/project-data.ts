/**
 * Project Data with correct images and occupancy values
 * This data is used as a fallback when API data is incomplete
 * and ensures consistent display across the site.
 */

export interface ProjectData {
  name: string;
  location: string;
  sector?: string;
  price: string;
  image: string;
  badge: string;
  badgeColor: string;
  occupancy: number;
  alt: string;
  slug: string;
}

// Generate slug from name
export function makeSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Project data with correct images, occupancy and badges from PHP version
// Images use the exact same paths as the PHP version (assets/img/p-X.webp)
export const projectsData: ProjectData[] = [
  {
    name: 'Signature Global Sarvam',
    location: 'Sector 37D',
    sector: 'Sector 37D',
    price: '2.81 Cr',
    image: '/assets/img/p-30.jpg',
    badge: 'Branded Residences',
    badgeColor: 'bg-primary',
    occupancy: 70,
    alt: 'Signature Global Sarvam Sector 37D',
    slug: 'signature-global-sarvam',
  },
  {
    name: 'Whiteland Westin Residences',
    location: 'Sector 103',
    sector: 'Sector 103',
    price: '5.5 Cr',
    image: '/assets/img/p-1.webp',
    badge: 'Branded Residences',
    badgeColor: 'bg-primary',
    occupancy: 65,
    alt: 'Whiteland Westin Residences in Sector 103',
    slug: 'whiteland-westin-residences',
  },
  {
    name: 'Godrej Vrikshya',
    location: 'Sector 103',
    sector: 'Sector 103',
    price: '3.6 Cr',
    image: '/assets/img/p-2.webp',
    badge: 'Forest-themed Living',
    badgeColor: 'bg-primary',
    occupancy: 82,
    alt: 'Godrej Vrikshya in Sector 103',
    slug: 'godrej-vrikshya',
  },
  {
    name: 'Signature Global De Luxe DXP',
    location: 'Sector 37D',
    sector: 'Sector 37D',
    price: '3.5 Cr',
    image: '/assets/img/p-3.webp',
    badge: 'High-rise Development',
    badgeColor: 'bg-primary',
    occupancy: 98,
    alt: 'Signature Global De Luxe DXP in Sector 37D',
    slug: 'signature-global-de-luxe-dxp',
  },
  {
    name: 'Hero Homes The Palatial',
    location: 'Sector 104',
    sector: 'Sector 104',
    price: '1.8 Cr',
    image: '/assets/img/p-4.webp',
    badge: 'Near Completion',
    badgeColor: 'bg-primary',
    occupancy: 92,
    alt: 'Hero Homes in Sector 104',
    slug: 'hero-homes-the-palatial',
  },
  {
    name: 'M3M Capital',
    location: 'Sector 113',
    sector: 'Sector 113',
    price: '5.2 Cr',
    image: '/assets/img/p-5.webp',
    badge: 'Possession (Dec 2026)',
    badgeColor: 'bg-primary',
    occupancy: 88,
    alt: 'M3M Capital in Sector 113',
    slug: 'm3m-capital',
  },
  {
    name: 'Elan The Presidential',
    location: 'Sector 106',
    sector: 'Sector 106',
    price: '6.5 Cr',
    image: '/assets/img/p-6.webp',
    badge: 'Ultra-Luxury Living',
    badgeColor: 'bg-primary',
    occupancy: 78,
    alt: 'Elan The Presidential in Sector 106',
    slug: 'elan-the-presidential',
  },
  {
    name: 'M3M Crown',
    location: 'Sector 111',
    sector: 'Sector 111',
    price: '4.5 Cr',
    image: '/assets/img/p-7.webp',
    badge: 'Under Construction (2028)',
    badgeColor: 'bg-primary',
    occupancy: 85,
    alt: 'M3M Crown in Sector 111',
    slug: 'm3m-crown',
  },
  {
    name: 'Smartworld One DXP',
    location: 'Sector 113',
    sector: 'Sector 113',
    price: '3.5 Cr',
    image: '/assets/img/p-8.webp',
    badge: 'Under Construction (2027)',
    badgeColor: 'bg-primary',
    occupancy: 90,
    alt: 'Smartworld One DXP in Sector 113',
    slug: 'smartworld-one-dxp',
  },
  {
    name: 'Puri Diplomatic Residences',
    location: 'Sector 111',
    sector: 'Sector 111',
    price: '4.2 Cr',
    image: '/assets/img/p-9.webp',
    badge: 'Exclusive Launch',
    badgeColor: 'bg-primary',
    occupancy: 60,
    alt: 'Puri Diplomatic Residences in Sector 111',
    slug: 'puri-diplomatic-residences',
  },
  {
    name: 'Sobha Altus',
    location: 'Sector 106',
    sector: 'Sector 106',
    price: '5.0 Cr',
    image: '/assets/img/p-10.webp',
    badge: 'Premium High-rise',
    badgeColor: 'bg-primary',
    occupancy: 55,
    alt: 'Sobha Altus in Sector 106',
    slug: 'sobha-altus',
  },
  {
    name: 'BPTP Amstoria Verti Greens',
    location: 'Sector 102',
    sector: 'Sector 102',
    price: '3.5 Cr',
    image: '/assets/img/p-11.webp',
    badge: 'Ultra-Luxury Living',
    badgeColor: 'bg-primary',
    occupancy: 12,
    alt: 'BPTP Verti Greens in Sector 102',
    slug: 'bptp-amstoria-verti-greens',
  },
  {
    name: 'M3M Elie Saab',
    location: 'Sector 111',
    sector: 'Sector 111',
    price: '14 Cr',
    image: '/assets/img/p-12.webp',
    badge: 'Branded Residences',
    badgeColor: 'bg-primary',
    occupancy: 15,
    alt: 'M3M Elie Saab Luxury Apartments in Sector 111',
    slug: 'm3m-elie-saab',
  },
  {
    name: 'BPTP Gaia',
    location: 'Sector 102',
    sector: 'Sector 102',
    price: '4.21 Cr',
    image: '/assets/img/p-13.webp',
    badge: 'New Launch (2032)',
    badgeColor: 'bg-primary',
    occupancy: 10,
    alt: 'BPTP Gaia Residences in Sector 102',
    slug: 'bptp-gaia',
  },
  {
    name: 'Landmark The Residency',
    location: 'Sector 103',
    sector: 'Sector 103',
    price: '1.3 Cr',
    image: '/assets/img/p-14.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 90,
    alt: 'Landmark The Residency in Sector 103',
    slug: 'landmark-the-residency',
  },
  {
    name: 'Adani Realty Iconic Towers',
    location: 'Sector 102',
    sector: 'Sector 102',
    price: '12 Cr',
    image: '/assets/img/p-15.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 88,
    alt: 'Adani Oyster Grande Luxury Penthouse Sector 102',
    slug: 'adani-realty-iconic-towers',
  },
  {
    name: 'HCBS Twin Horizon',
    location: 'Sector 102',
    sector: 'Sector 102',
    price: '4.11 Cr',
    image: '/assets/img/p-16.webp',
    badge: 'Under Construction (2028)',
    badgeColor: 'bg-primary',
    occupancy: 22,
    alt: 'HCBS Twin Horizon Sector 102',
    slug: 'hcbs-twin-horizon',
  },
  {
    name: 'Central Park Delphine',
    location: 'Sector 104',
    sector: 'Sector 104',
    price: '9 Cr',
    image: '/assets/img/p-17.webp',
    badge: 'Luxury High-rise',
    badgeColor: 'bg-primary',
    occupancy: 8,
    alt: 'Central Park Delphine in Sector 104',
    slug: 'central-park-delphine',
  },
  {
    name: 'AIPL Riviera Lake City',
    location: 'Sector 103',
    sector: 'Sector 103',
    price: '2.8 Cr',
    image: '/assets/img/p-18.webp',
    badge: 'Lake-facing Living',
    badgeColor: 'bg-primary',
    occupancy: 5,
    alt: 'AIPL Riviera Lake City Sector 103',
    slug: 'aipl-riviera-lake-city',
  },
  {
    name: 'Tata Raisina Residency',
    location: 'Sector 59',
    sector: 'Sector 59',
    price: '5.5 Cr',
    image: '/assets/img/p-19.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 95,
    alt: 'Tata Raisina Residency Sector 59',
    slug: 'tata-raisina-residency',
  },
  {
    name: 'Mahindra Luminare',
    location: 'Sector 59',
    sector: 'Sector 59',
    price: '7.9 Cr',
    image: '/assets/img/p-20.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 85,
    alt: 'Mahindra Luminare Sector 59',
    slug: 'mahindra-luminare',
  },
  {
    name: 'Shapoorji Pallonji Joyville',
    location: 'Sector 102',
    sector: 'Sector 102',
    price: '2.1 Cr',
    image: '/assets/img/p-21.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 92,
    alt: 'Joyville by Shapoorji Pallonji Sector 102',
    slug: 'shapoorji-pallonji-joyville',
  },
  {
    name: 'Omaxe New Heights',
    location: 'Sector 78',
    sector: 'Sector 78',
    price: '1.8 Cr',
    image: '/assets/img/p-22.webp',
    badge: 'Established Society',
    badgeColor: 'bg-primary',
    occupancy: 94,
    alt: 'Omaxe New Heights Sector 78',
    slug: 'omaxe-new-heights',
  },
  {
    name: 'Sobha City',
    location: 'Sector 108',
    sector: 'Sector 108',
    price: '1.95 Cr',
    image: '/assets/img/p-23.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 96,
    alt: 'Sobha City Sector 108 Dwarka Expressway',
    slug: 'sobha-city',
  },
  {
    name: 'Emaar Palm Hills',
    location: 'Sector 77',
    sector: 'Sector 77',
    price: '3.4 Cr',
    image: '/assets/img/p-24.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 90,
    alt: 'Emaar Palm Hills Sector 77',
    slug: 'emaar-palm-hills',
  },
  {
    name: 'Godrej Meridien',
    location: 'Sector 106',
    sector: 'Sector 106',
    price: '4.8 Cr',
    image: '/assets/img/p-25.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 88,
    alt: 'Godrej Meridien Sector 106',
    slug: 'godrej-meridien',
  },
  {
    name: 'Godrej Summit',
    location: 'Sector 104',
    sector: 'Sector 104',
    price: '9.25 Cr',
    image: '/assets/img/p-26.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 98,
    alt: 'Godrej Summit Sector 104',
    slug: 'godrej-summit',
  },
  {
    name: 'DLF The Ultima',
    location: 'Sector 81',
    sector: 'Sector 81',
    price: '7.25 Cr',
    image: '/assets/img/p-27.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 94,
    alt: 'DLF The Ultima Sector 81',
    slug: 'dlf-the-ultima',
  },
  {
    name: 'DLF The Sky Court',
    location: 'Sector 86',
    sector: 'Sector 86',
    price: '2.5 Cr',
    image: '/assets/img/p-28.webp',
    badge: 'Ready to Move',
    badgeColor: 'bg-primary',
    occupancy: 92,
    alt: 'DLF The Sky Court Sector 86',
    slug: 'dlf-the-sky-court',
  },
  {
    name: 'Omaxe Dwarka Heights',
    location: 'Sector 19B Dwarka',
    sector: 'Sector 19B Dwarka',
    price: '1.45 Cr',
    image: '/assets/img/p-29.webp',
    badge: 'Under Construction',
    badgeColor: 'bg-primary',
    occupancy: 40,
    alt: 'Omaxe Dwarka Heights Sector 19B',
    slug: 'omaxe-dwarka-heights',
  },
];

// Get project data by slug (for enriching API data)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(p => p.slug === slug || makeSlug(p.name) === slug);
}

// Get project data by name (fuzzy match for enriching API data)
export function getProjectByName(name: string): ProjectData | undefined {
  const normalizedName = name.toLowerCase().trim();
  return projectsData.find(p => 
    p.name.toLowerCase().trim() === normalizedName ||
    makeSlug(p.name) === makeSlug(name)
  );
}

// Enrich API project data with local data (images, occupancy, etc.)
export function enrichProjectData<T extends { name?: string; slug?: string; mainImage?: string; occupancy?: number; badge?: string }>(
  apiProject: T
): T {
  const localData = apiProject.slug 
    ? getProjectBySlug(apiProject.slug) 
    : apiProject.name 
      ? getProjectByName(apiProject.name)
      : undefined;

  if (!localData) return apiProject;

  return {
    ...apiProject,
    // Use local image if API image is missing or is placeholder
    mainImage: apiProject.mainImage && !apiProject.mainImage.includes('placeholder') 
      ? apiProject.mainImage 
      : localData.image,
    // Use local occupancy if API doesn't have it
    occupancy: apiProject.occupancy ?? localData.occupancy,
    // Use local badge if API doesn't have it
    badge: apiProject.badge || localData.badge,
  };
}

// Default fallback image
export const DEFAULT_PROJECT_IMAGE = '/assets/img/Og-Image.png';
