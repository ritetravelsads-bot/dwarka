'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  Trash2, 
  Mail, 
  Phone, 
  Calendar,
  Filter,
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageSquare
} from 'lucide-react';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  project?: string;
  message?: string;
  source?: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function AdminLeadsPage() {
  const searchParams = useSearchParams();
  const initialStatus = searchParams.get('status') || 'all';
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, [pagination.page, statusFilter]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(statusFilter !== 'all' && { status: statusFilter }),
      });
      
      const res = await fetch(`/api/admin/leads?${params}`);
      const data = await res.json();
      
      setLeads(data.leads || []);
      setPagination(data.pagination || pagination);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: leadId, status: newStatus }),
      });
      
      if (res.ok) {
        setLeads(leads.map((lead) =>
          lead._id === leadId ? { ...lead, status: newStatus } : lead
        ));
        if (selectedLead?._id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
      }
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads(leads.filter((l) => l._id !== id));
        if (selectedLead?._id === id) {
          setSelectedLead(null);
        }
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'converted':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <p className="text-gray-600">Manage customer inquiries and leads</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPagination({ ...pagination, page: 1 });
            }}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Lead</th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Contact</th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Date</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredLeads.map((lead) => (
                      <tr 
                        key={lead._id} 
                        className={`hover:bg-gray-50 cursor-pointer ${
                          selectedLead?._id === lead._id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setSelectedLead(lead)}
                      >
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900">{lead.name}</p>
                            {lead.project && (
                              <p className="text-sm text-gray-500">{lead.project}</p>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <p className="text-gray-600">{lead.email}</p>
                            <p className="text-gray-500">{lead.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLead(lead);
                              }}
                              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(lead._id);
                              }}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
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

              {filteredLeads.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No leads found.
                </div>
              )}

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex items-center justify-between px-6 py-4 border-t">
                  <p className="text-sm text-gray-600">
                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                      disabled={pagination.page === 1}
                      className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {pagination.page} of {pagination.pages}
                    </span>
                    <button
                      onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                      disabled={pagination.page === pagination.pages}
                      className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Lead Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {selectedLead ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{selectedLead.name}</h2>
                <p className="text-sm text-gray-500">
                  Added {new Date(selectedLead.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href={`mailto:${selectedLead.email}`} className="text-blue-600 hover:underline">
                      {selectedLead.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline">
                      {selectedLead.phone}
                    </a>
                  </div>
                </div>

                {selectedLead.project && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Interested In</p>
                    <p className="font-medium text-gray-900">{selectedLead.project}</p>
                  </div>
                )}

                {selectedLead.message && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <p className="text-xs text-gray-500">Message</p>
                    </div>
                    <p className="text-gray-700">{selectedLead.message}</p>
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Update Status</p>
                <div className="grid grid-cols-2 gap-2">
                  {['new', 'contacted', 'converted', 'closed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateLeadStatus(selectedLead._id, status)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedLead.status === status
                          ? getStatusColor(status)
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t flex gap-2">
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg text-sm transition-colors"
                >
                  Send Email
                </a>
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg text-sm transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Select a lead to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
