'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

interface Stats {
  projects: {
    total: number;
    featured: number;
  };
  leads: {
    total: number;
    new: number;
    contacted: number;
    converted: number;
  };
  recentLeads: Array<{
    _id: string;
    name: string;
    email: string;
    phone: string;
    project?: string;
    createdAt: string;
    status: string;
  }>;
  leadsByDay: Array<{
    _id: string;
    count: number;
  }>;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    {
      label: 'Total Projects',
      value: stats?.projects.total || 0,
      icon: Building2,
      color: 'bg-blue-500',
      link: '/admin/projects',
    },
    {
      label: 'Featured Projects',
      value: stats?.projects.featured || 0,
      icon: Star,
      color: 'bg-yellow-500',
      link: '/admin/projects',
    },
    {
      label: 'Total Leads',
      value: stats?.leads.total || 0,
      icon: Users,
      color: 'bg-green-500',
      link: '/admin/leads',
    },
    {
      label: 'New Leads',
      value: stats?.leads.new || 0,
      icon: TrendingUp,
      color: 'bg-purple-500',
      link: '/admin/leads?status=new',
    },
  ];

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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to Dwarka Expressway Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Link
            key={stat.label}
            href={stat.link}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lead Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
            <Link 
              href="/admin/leads" 
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {stats?.recentLeads && stats.recentLeads.length > 0 ? (
            <div className="space-y-4">
              {stats.recentLeads.map((lead) => (
                <div 
                  key={lead._id} 
                  className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{lead.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {lead.phone}
                      </span>
                    </div>
                    {lead.project && (
                      <p className="text-sm text-gray-500 mt-1">
                        Interested in: {lead.project}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No leads yet. Leads will appear here when customers submit the contact form.
            </div>
          )}
        </div>

        {/* Lead Status Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Lead Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">New</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ 
                      width: `${stats?.leads.total ? (stats.leads.new / stats.leads.total) * 100 : 0}%` 
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">{stats?.leads.new || 0}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Contacted</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 rounded-full"
                    style={{ 
                      width: `${stats?.leads.total ? (stats.leads.contacted / stats.leads.total) * 100 : 0}%` 
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">{stats?.leads.contacted || 0}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Converted</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ 
                      width: `${stats?.leads.total ? (stats.leads.converted / stats.leads.total) * 100 : 0}%` 
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900">{stats?.leads.converted || 0}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link 
                href="/admin/projects/new"
                className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg text-sm transition-colors"
              >
                Add New Project
              </Link>
              <Link 
                href="/admin/leads?status=new"
                className="block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center rounded-lg text-sm transition-colors"
              >
                View New Leads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
