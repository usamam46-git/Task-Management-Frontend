/* eslint-disable no-unused-vars */

import React from 'react';
import { 
  CalendarDaysIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  UserGroupIcon,
  ArrowTrendingUpIcon,
  DocumentChartBarIcon 
} from '@heroicons/react/24/outline';

const StatCard = ({ title, value, icon: Icon, color, change }) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500'
  };

  const textColors = {
    blue: 'text-blue-700',
    green: 'text-green-700',
    yellow: 'text-yellow-700',
    purple: 'text-purple-700',
    red: 'text-red-700'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-baseline mt-2">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <span className={`ml-2 text-sm font-medium ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {change > 0 ? '+' : ''}{change}%
                <TrendingUpIcon className={`inline h-4 w-4 ml-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`} />
              </span>
            )}
          </div>
        </div>
        <div className={`p-3 rounded-full ${colors[color]}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

const StatsCards = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Tasks',
      value: stats?.totalTasks || 0,
      icon: CalendarDaysIcon,
      color: 'blue',
      change: stats?.taskChange || 0
    },
    {
      title: 'Completed Tasks',
      value: stats?.completedTasks || 0,
      icon: CheckCircleIcon,
      color: 'green',
      change: stats?.completionRate || 0
    },
    {
      title: 'Pending Tasks',
      value: stats?.pendingTasks || 0,
      icon: ClockIcon,
      color: 'yellow',
      change: stats?.pendingChange || 0
    },
    {
      title: 'Team Members',
      value: stats?.teamMembers || 0,
      icon: UserGroupIcon,
      color: 'purple',
      change: stats?.teamGrowth || 0
    },
    {
      title: 'Active Projects',
      value: stats?.activeProjects || 0,
      icon: DocumentChartBarIcon,
      color: 'blue',
      change: stats?.projectGrowth || 0
    },
    {
      title: 'Productivity',
      value: `${stats?.productivity || 0}%`,
      icon: ArrowTrendingUpIcon ,
      color: 'green',
      change: stats?.productivityChange || 0
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {statCards.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;