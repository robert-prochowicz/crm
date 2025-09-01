
import React from 'react';
import { SearchIcon, BellIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center">
        <div className="relative mr-6">
          <SearchIcon className="absolute w-5 h-5 text-gray-400 top-1/2 left-3 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="ml-6 flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://picsum.photos/100/100"
            alt="User avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">Anna Weber</p>
            <p className="text-xs text-gray-500">Sales Rep</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
