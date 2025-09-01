import React, { useState } from 'react';
import StatCard from './StatCard.tsx';
import CustomerTable from './CustomerTable.tsx';
import { CUSTOMERS } from '../data/customer-data.ts';
import { Customer } from '../types.ts';

const RefreshIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l-3.182-3.182a8.25 8.25 0 0111.664 0l3.182 3.182" />
    </svg>
);

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(() => 
    [...CUSTOMERS].sort((a, b) => b.timestamp.localeCompare(a.timestamp))
  );

  const handleRefresh = () => {
    // Simulate a new customer call request by updating a random customer's timestamp to now
    setCustomers(currentCustomers => {
      if (currentCustomers.length === 0) {
        return [];
      }
      const newCustomers = [...currentCustomers];
      const randomIndex = Math.floor(Math.random() * newCustomers.length);
      const randomCustomer = { ...newCustomers[randomIndex] };
      
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      randomCustomer.timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
      newCustomers[randomIndex] = randomCustomer;

      return newCustomers.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-slate-900">Wealth Management Dashboard</h1>
        <div className="flex items-center space-x-2">
            <select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>This Quarter</option>
                <option>Last Quarter</option>
                <option>This Year</option>
            </select>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Calls Made Today" value="84" change="+12%" changeType="increase" />
        <StatCard title="Conversion Rate" value="15.2%" change="+1.8%" changeType="increase" />
        <StatCard title="QTD Revenue" value="$1.2M" change="-$50k" changeType="decrease" />
        <StatCard title="New Investments" value="$3.5M" change="+250k" changeType="increase" />
      </div>

      {/* Customer Table Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Customer Call Queue</h2>
            <button
                onClick={handleRefresh}
                aria-label="Refresh customer list"
                className="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
                <RefreshIcon />
                Refresh
            </button>
        </div>
        <CustomerTable customers={customers} />
      </div>
    </div>
  );
};

export default Dashboard;