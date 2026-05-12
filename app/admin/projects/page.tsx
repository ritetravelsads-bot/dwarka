'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Search,
  Star,
  Eye,
  MoreVertical
} from 'lucide-react';
import { Project } from '@/lib/types';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/admin/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const toggleFeatured = async (project: Project) => {
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          _id: project._id, 
          featured: !project.isFeatured 
        }),
      });
      
      if (res.ok) {
        setProjects(projects.map((p) => 
          p._id === project._id ? { ...p, featured: !p.isFeatured } : p
        ));
      }
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.developer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage your property listings</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Project</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Developer</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Type</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Price</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Featured</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProjects.map((project) => (
                <tr key={project._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-100">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Eye className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{project.name}</p>
                        <p className="text-sm text-gray-500">{project.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{project.developer || '-'}</td>
                  <td className="px-6 py-4 text-gray-600">{project.property_type || '-'}</td>
                  <td className="px-6 py-4 text-gray-600">{project.price || '-'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status || 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleFeatured(project)}
                      className={`p-1 rounded ${
                        project.featured 
                          ? 'text-yellow-500 hover:text-yellow-600' 
                          : 'text-gray-300 hover:text-gray-400'
                      }`}
                    >
                      <Star className="w-5 h-5" fill={project.featured ? 'currentColor' : 'none'} />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        target="_blank"
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/admin/projects/${project._id}`}
                        className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project._id!)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {searchTerm ? 'No projects found matching your search.' : 'No projects yet. Add your first project!'}
          </div>
        )}
      </div>
    </div>
  );
}
