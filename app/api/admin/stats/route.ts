import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import clientPromise from '@/lib/mongodb';

async function isAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin_auth');
  return authCookie?.value === 'authenticated';
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('dwarka');
    
    const [
      totalProjects,
      featuredProjects,
      totalLeads,
      newLeads,
      contactedLeads,
      convertedLeads,
      recentLeads,
    ] = await Promise.all([
      db.collection('projects').countDocuments(),
      db.collection('projects').countDocuments({ featured: true }),
      db.collection('leads').countDocuments(),
      db.collection('leads').countDocuments({ status: 'new' }),
      db.collection('leads').countDocuments({ status: 'contacted' }),
      db.collection('leads').countDocuments({ status: 'converted' }),
      db.collection('leads')
        .find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .toArray(),
    ]);
    
    // Get leads by day for the last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const leadsByDay = await db.collection('leads').aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]).toArray();
    
    return NextResponse.json({
      projects: {
        total: totalProjects,
        featured: featuredProjects,
      },
      leads: {
        total: totalLeads,
        new: newLeads,
        contacted: contactedLeads,
        converted: convertedLeads,
      },
      recentLeads,
      leadsByDay,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
