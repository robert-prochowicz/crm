
import React, { useState, useEffect } from 'react';
import { Customer } from '../types';
import { fetchCustomers } from '../services/csvService';
import StatCard from './StatCard';
import CustomerTable from './CustomerTable';
import { PhoneIcon, ChartPieIcon, CurrencyDollarIcon, UserPlusIcon } from './Icons';

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Department Overview</h2>
        <div className="grid gap-6 mt-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Calls Today" 
            value="42" 
            icon={<PhoneIcon className="w-8 h-8 text-blue-500" />} 
            change="+5.2%"
            changeType="positive"
          />
          <StatCard 
            title="Conversion Rate" 
            value="12.5%" 
            icon={<ChartPieIcon className="w-8 h-8 text-green-500" />} 
            change="+1.1%"
            changeType="positive"
          />
          <StatCard 
            title="AUM Increase (MTD)" 
            value="$1.2M" 
            icon={<CurrencyDollarIcon className="w-8 h-8 text-yellow-500" />} 
            change="-$50k"
            changeType="negative"
          />
          <StatCard 
            title="New Clients" 
            value="7" 
            icon={<UserPlusIcon className="w-8 h-8 text-indigo-500" />} 
            change="+2 this week"
            changeType="positive"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Calls</h2>
        <CustomerTable customers={customers} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default Dashboard;
