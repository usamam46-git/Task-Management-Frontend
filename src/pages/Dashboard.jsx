import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboardStats } from '../store/slices/taskSlice';
import StatsCards from '../components/dashboard/StatsCards';
import TaskChart from '../components/dashboard/TaskChart';
import RecentActivity from '../components/dashboard/RecentActivity';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { dashboardStats, isLoading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-gray-600 mt-1">
              {user?.role === 'admin' 
                ? 'Manage your companies, teams, and track performance.'
                : user?.role === 'manager'
                ? 'Manage your team tasks and monitor progress.'
                : 'View your assigned tasks and update your progress.'
              }
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <StatsCards stats={dashboardStats} />

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskChart data={dashboardStats?.chartData || []} />
        <RecentActivity activities={dashboardStats?.recentActivities || []} />
      </div>

      {/* Quick Actions */}
      {user?.role !== 'staff' && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              + Create New Task
            </button>
            <button className="bg-green-50 hover:bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              + Add Team Member
            </button>
            <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              Generate Report
            </button>
            <button className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors">
              View Analytics
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;