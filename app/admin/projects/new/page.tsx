'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Plus, X } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';

interface FloorPlan {
  title: string;
  size: string;
  price: string;
  image: string;
}

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    slug: '',
    developer: '',
    status: 'Active',
    type: 'Residential',
    featured: false,
    
    // Location
    location: '',
    sector: '',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '',
    
    // Pricing & Size
    price: '',
    priceValue: 0,
    pricePerSqFt: '',
    size: '',
    sizeRange: '',
    landSize: '',
    
    // Project Details
    rera: '',
    possession: '',
    configurations: [] as string[],
    occupancy: 0,
    badge: '',
    
    // Content
    description: '',
    shortDescription: '',
    highlights: [] as string[],
    amenities: [] as string[],
    
    // Images & Media
    mainImage: '',
    logo: '',
    brochure: '',
    masterPlan: '',
    locationMap: '',
    videoUrl: '',
    gallery: [] as string[],
    
    // Hero Section
    heroImage: '',
    heroHeading: '',
    heroSubText: '',
    heroPossession: '',
    
    // About Section
    aboutTitle: '',
    aboutContent: '',
    aboutImage: '',
    
    // Floor Plans
    floorPlans: [] as FloorPlan[],
    
    // SEO
    metaTitle: '',
    metaDescription: '',
    ogImage: '',
  });

  const [newConfig, setNewConfig] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [newAmenity, setNewAmenity] = useState('');
  const [newGalleryUrl, setNewGalleryUrl] = useState('');
  const [newFloorPlan, setNewFloorPlan] = useState<FloorPlan>({ title: '', size: '', price: '', image: '' });

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'location', label: 'Location' },
    { id: 'pricing', label: 'Pricing & Size' },
    { id: 'details', label: 'Project Details' },
    { id: 'content', label: 'Content' },
    { id: 'media', label: 'Images & Media' },
    { id: 'hero', label: 'Hero Section' },
    { id: 'about', label: 'About Section' },
    { id: 'floorplans', label: 'Floor Plans' },
    { id: 'seo', label: 'SEO' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  // Array field handlers
  const addToArray = (field: 'configurations' | 'highlights' | 'amenities' | 'gallery', value: string, clearFn: () => void) => {
    if (value.trim()) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value.trim()],
      });
      clearFn();
    }
  };

  const removeFromArray = (field: 'configurations' | 'highlights' | 'amenities' | 'gallery', index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index),
    });
  };

  const addFloorPlan = () => {
    if (newFloorPlan.title.trim()) {
      setFormData({
        ...formData,
        floorPlans: [...formData.floorPlans, { ...newFloorPlan }],
      });
      setNewFloorPlan({ title: '', size: '', price: '', image: '' });
    }
  };

  const removeFloorPlan = (index: number) => {
    setFormData({
      ...formData,
      floorPlans: formData.floorPlans.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Transform form data to match API structure
      const projectData = {
        name: formData.name,
        slug: formData.slug,
        developer: formData.developer,
        status: formData.status,
        type: formData.type,
        featured: formData.featured,
        location: formData.location,
        sector: formData.sector,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        price: formData.price,
        priceValue: formData.priceValue,
        pricePerSqFt: formData.pricePerSqFt,
        size: formData.size,
        sizeRange: formData.sizeRange,
        landSize: formData.landSize,
        rera: formData.rera,
        possession: formData.possession,
        configurations: formData.configurations,
        occupancy: formData.occupancy,
        badge: formData.badge,
        description: formData.description,
        shortDescription: formData.shortDescription,
        highlights: formData.highlights,
        amenities: formData.amenities,
        mainImage: formData.mainImage,
        logo: formData.logo,
        brochure: formData.brochure,
        masterPlan: formData.masterPlan,
        locationMap: formData.locationMap,
        videoUrl: formData.videoUrl,
        gallery: formData.gallery,
        hero: {
          image: formData.heroImage,
          heading: formData.heroHeading,
          subText: formData.heroSubText,
          possession: formData.heroPossession,
        },
        about: {
          title: formData.aboutTitle,
          content: formData.aboutContent,
          image: formData.aboutImage,
        },
        floorPlan: formData.floorPlans,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
        ogImage: formData.ogImage,
      };

      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });

      if (res.ok) {
        router.push('/admin/projects');
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to create project');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/projects" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Project</h1>
          <p className="text-gray-600">Create a new property listing with all details</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="flex -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Basic Info Tab */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Project Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleNameChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>URL Slug *</label>
                  <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Developer</label>
                  <input type="text" name="developer" value={formData.developer} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Property Type</label>
                  <select name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Plots">Plots</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className={inputClass}>
                    <option value="Active">Active</option>
                    <option value="Under Construction">Under Construction</option>
                    <option value="Ready to Move">Ready to Move</option>
                    <option value="Sold Out">Sold Out</option>
                    <option value="Coming Soon">Coming Soon</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" name="featured" id="featured" checked={formData.featured} onChange={handleChange} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">Featured Project</label>
                </div>
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === 'location' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Location Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Location / Address</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g., Dwarka Expressway" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Sector</label>
                  <input type="text" name="sector" value={formData.sector} onChange={handleChange} placeholder="e.g., Sector 103" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Pincode</label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* Pricing & Size Tab */}
          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing & Size</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Price (Display)</label>
                  <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="e.g., 2.5 Cr" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Price Value (for sorting/filtering)</label>
                  <input type="number" name="priceValue" value={formData.priceValue} onChange={handleChange} placeholder="e.g., 25000000" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Price Per Sq.Ft.</label>
                  <input type="text" name="pricePerSqFt" value={formData.pricePerSqFt} onChange={handleChange} placeholder="e.g., ₹18,500/sq.ft" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Size</label>
                  <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="e.g., 1850 sq.ft." className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Size Range</label>
                  <input type="text" name="sizeRange" value={formData.sizeRange} onChange={handleChange} placeholder="e.g., 1200 - 3500 sq.ft." className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Land Size</label>
                  <input type="text" name="landSize" value={formData.landSize} onChange={handleChange} placeholder="e.g., 4.5 Acres" className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* Project Details Tab */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>RERA Number</label>
                  <input type="text" name="rera" value={formData.rera} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Possession Date</label>
                  <input type="text" name="possession" value={formData.possession} onChange={handleChange} placeholder="e.g., Dec 2026" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Badge Text</label>
                  <input type="text" name="badge" value={formData.badge} onChange={handleChange} placeholder="e.g., Branded Residences" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Occupancy %</label>
                  <input type="number" name="occupancy" value={formData.occupancy} onChange={handleChange} min="0" max="100" className={inputClass} />
                </div>
              </div>

              {/* Configurations */}
              <div>
                <label className={labelClass}>Configurations (BHK options)</label>
                <div className="flex gap-2 mb-3">
                  <input type="text" value={newConfig} onChange={(e) => setNewConfig(e.target.value)} placeholder="e.g., 3 BHK" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('configurations', newConfig, () => setNewConfig('')))} />
                  <button type="button" onClick={() => addToArray('configurations', newConfig, () => setNewConfig(''))} className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.configurations.map((config, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {config}
                      <button type="button" onClick={() => removeFromArray('configurations', index)} className="text-blue-600 hover:text-red-500"><X className="w-4 h-4" /></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Content</h2>
              
              <div>
                <label className={labelClass}>Short Description</label>
                <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} rows={2} className={inputClass} placeholder="Brief one-liner about the project" />
              </div>
              
              <div>
                <label className={labelClass}>Full Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={5} className={inputClass} placeholder="Detailed project description" />
              </div>

              {/* Highlights */}
              <div>
                <label className={labelClass}>Key Highlights</label>
                <div className="flex gap-2 mb-3">
                  <input type="text" value={newHighlight} onChange={(e) => setNewHighlight(e.target.value)} placeholder="e.g., 24/7 Security" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('highlights', newHighlight, () => setNewHighlight('')))} />
                  <button type="button" onClick={() => addToArray('highlights', newHighlight, () => setNewHighlight(''))} className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.highlights.map((item, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {item}
                      <button type="button" onClick={() => removeFromArray('highlights', index)} className="hover:text-red-500"><X className="w-4 h-4" /></button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className={labelClass}>Amenities</label>
                <div className="flex gap-2 mb-3">
                  <input type="text" value={newAmenity} onChange={(e) => setNewAmenity(e.target.value)} placeholder="e.g., Swimming Pool" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addToArray('amenities', newAmenity, () => setNewAmenity('')))} />
                  <button type="button" onClick={() => addToArray('amenities', newAmenity, () => setNewAmenity(''))} className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.amenities.map((item, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {item}
                      <button type="button" onClick={() => removeFromArray('amenities', index)} className="hover:text-red-500"><X className="w-4 h-4" /></button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Images & Media Tab */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Images & Media</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageUpload
                  label="Main Image"
                  value={formData.mainImage}
                  onChange={(url) => setFormData({ ...formData, mainImage: url })}
                  folder="projects/main"
                  aspectRatio="video"
                />
                <ImageUpload
                  label="Developer Logo"
                  value={formData.logo}
                  onChange={(url) => setFormData({ ...formData, logo: url })}
                  folder="projects/logos"
                  aspectRatio="square"
                />
                <ImageUpload
                  label="Master Plan"
                  value={formData.masterPlan}
                  onChange={(url) => setFormData({ ...formData, masterPlan: url })}
                  folder="projects/masterplans"
                  aspectRatio="video"
                />
                <ImageUpload
                  label="Location Map"
                  value={formData.locationMap}
                  onChange={(url) => setFormData({ ...formData, locationMap: url })}
                  folder="projects/locationmaps"
                  aspectRatio="video"
                />
                <div>
                  <label className={labelClass}>Brochure URL (PDF)</label>
                  <ImageUpload
                    value={formData.brochure}
                    onChange={(url) => setFormData({ ...formData, brochure: url })}
                    folder="projects/brochures"
                    accept="application/pdf,image/*"
                    aspectRatio="auto"
                  />
                </div>
                <div>
                  <label className={labelClass}>Video URL (YouTube/Vimeo)</label>
                  <input type="url" name="videoUrl" value={formData.videoUrl} onChange={handleChange} className={inputClass} placeholder="https://youtube.com/watch?v=..." />
                </div>
              </div>

              {/* Gallery */}
              <div>
                <label className={labelClass}>Gallery Images</label>
                <p className="text-sm text-gray-500 mb-3">Upload or paste URLs for gallery images</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {formData.gallery.map((url, index) => (
                    <div key={index} className="relative group">
                      <img src={url} alt={`Gallery ${index + 1}`} className="h-24 w-full object-cover rounded-lg" />
                      <button type="button" onClick={() => removeFromArray('gallery', index)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <ImageUpload
                  label="Add Gallery Image"
                  value=""
                  onChange={(url) => {
                    if (url) {
                      setFormData({ ...formData, gallery: [...formData.gallery, url] });
                    }
                  }}
                  folder="projects/gallery"
                  aspectRatio="video"
                />
              </div>
            </div>
          )}

          {/* Hero Section Tab */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Hero Section</h2>
              <p className="text-gray-500 text-sm mb-4">These fields appear in the hero banner on the project detail page.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelClass}>Hero Image URL</label>
                  <input type="url" name="heroImage" value={formData.heroImage} onChange={handleChange} className={inputClass} />
                  {formData.heroImage && <img src={formData.heroImage} alt="Hero Preview" className="mt-2 h-32 w-full object-cover rounded" />}
                </div>
                <div>
                  <label className={labelClass}>Hero Heading</label>
                  <input type="text" name="heroHeading" value={formData.heroHeading} onChange={handleChange} placeholder="Override project name in hero" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Hero Possession Text</label>
                  <input type="text" name="heroPossession" value={formData.heroPossession} onChange={handleChange} placeholder="e.g., Oct 2031" className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Hero Sub Text</label>
                  <textarea name="heroSubText" value={formData.heroSubText} onChange={handleChange} rows={2} placeholder="Tagline or short description for hero" className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* About Section Tab */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About Section</h2>
              <p className="text-gray-500 text-sm mb-4">This appears as the About Project section on the detail page.</p>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className={labelClass}>About Title</label>
                  <input type="text" name="aboutTitle" value={formData.aboutTitle} onChange={handleChange} placeholder="e.g., About The Project" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>About Content</label>
                  <textarea name="aboutContent" value={formData.aboutContent} onChange={handleChange} rows={6} placeholder="Detailed about section content" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>About Image URL</label>
                  <input type="url" name="aboutImage" value={formData.aboutImage} onChange={handleChange} className={inputClass} />
                  {formData.aboutImage && <img src={formData.aboutImage} alt="About Preview" className="mt-2 h-32 object-cover rounded" />}
                </div>
              </div>
            </div>
          )}

          {/* Floor Plans Tab */}
          {activeTab === 'floorplans' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Floor Plans</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="font-medium">Add Floor Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input type="text" value={newFloorPlan.title} onChange={(e) => setNewFloorPlan({ ...newFloorPlan, title: e.target.value })} placeholder="Title (e.g., 3 BHK)" className={inputClass} />
                  <input type="text" value={newFloorPlan.size} onChange={(e) => setNewFloorPlan({ ...newFloorPlan, size: e.target.value })} placeholder="Size (e.g., 1850 sq.ft.)" className={inputClass} />
                  <input type="text" value={newFloorPlan.price} onChange={(e) => setNewFloorPlan({ ...newFloorPlan, price: e.target.value })} placeholder="Price (e.g., 2.5 Cr)" className={inputClass} />
                  <input type="url" value={newFloorPlan.image} onChange={(e) => setNewFloorPlan({ ...newFloorPlan, image: e.target.value })} placeholder="Image URL" className={inputClass} />
                </div>
                <button type="button" onClick={addFloorPlan} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Floor Plan
                </button>
              </div>

              <div className="space-y-3">
                {formData.floorPlans.map((fp, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                    <div className="flex items-center gap-4">
                      {fp.image && <img src={fp.image} alt={fp.title} className="h-16 w-24 object-cover rounded" />}
                      <div>
                        <p className="font-medium">{fp.title}</p>
                        <p className="text-sm text-gray-500">{fp.size} | {fp.price}</p>
                      </div>
                    </div>
                    <button type="button" onClick={() => removeFloorPlan(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className={labelClass}>Meta Title</label>
                  <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} placeholder="SEO page title" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Meta Description</label>
                  <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows={3} placeholder="SEO description (150-160 characters)" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>OG Image URL</label>
                  <input type="url" name="ogImage" value={formData.ogImage} onChange={handleChange} placeholder="Social sharing image URL" className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex justify-between items-center pt-6 mt-6 border-t">
            <div className="flex gap-2">
              {tabs.map((tab, index) => {
                if (index === 0) return null;
                const prevTab = tabs[index - 1];
                if (activeTab === tab.id) {
                  return (
                    <button key={prevTab.id} type="button" onClick={() => setActiveTab(prevTab.id)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Previous
                    </button>
                  );
                }
                return null;
              })}
            </div>
            
            <div className="flex gap-4">
              <Link href="/admin/projects" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </Link>
              
              {activeTab !== tabs[tabs.length - 1].id ? (
                <button type="button" onClick={() => {
                  const currentIndex = tabs.findIndex(t => t.id === activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1].id);
                  }
                }} className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg">
                  Next
                </button>
              ) : (
                <button type="submit" disabled={loading} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors">
                  {loading ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Create Project
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
