import React from 'react';
import { Customer } from '../types.ts';

interface CustomerTableProps {
  customers: Customer[];
}

const PhoneIcon: React.FC = () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Account ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">State</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Phone</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Call Since</th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Call</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {customers.map((customer) => (
            <tr key={customer.account_id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-slate-900">{`${customer.first_name} ${customer.last_name}`}</div>
                <div className="text-sm text-slate-500">{`Age: ${customer.age}`}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{customer.account_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{customer.state}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{customer.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{customer.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <PhoneIcon />
                  Call
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;