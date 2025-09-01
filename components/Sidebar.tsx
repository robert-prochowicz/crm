
import React from 'react';
import { HomeIcon, UsersIcon, ChartBarIcon, CogIcon } from './Icons';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <div className="text-2xl font-bold text-blue-600">
          WM CRM
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg"
          >
            <HomeIcon className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <UsersIcon className="w-5 h-5 mr-3" />
            Customers
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <ChartBarIcon className="w-5 h-5 mr-3" />
            Reports
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <CogIcon className="w-5 h-5 mr-3" />
            Settings
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
