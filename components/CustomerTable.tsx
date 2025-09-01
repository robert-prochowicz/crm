
import React from 'react';
import { Customer, InvestmentPropensity } from '../types';
import { PhoneIcon } from './Icons';

interface CustomerTableProps {
  customers: Customer[];
  isLoading: boolean;
  error: string | null;
}

const PropensityBadge: React.FC<{ propensity: InvestmentPropensity }> = ({ propensity }) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full";
    let colorClasses = "";

    switch (propensity) {
        case 'High':
            colorClasses = "bg-green-100 text-green-800";
            break;
        case 'Medium':
            colorClasses = "bg-yellow-100 text-yellow-800";
            break;
        case 'Low':
            colorClasses = "bg-red-100 text-red-800";
            break;
        default:
            colorClasses = "bg-gray-100 text-gray-800";
    }

    return (
        <span className={`${baseClasses} ${colorClasses}`}>
            {propensity}
        </span>
    );
};


const TableSkeleton: React.FC = () => (
    <>
        {[...Array(5)].map((_, i) => (
            <tr key={i} className="animate-pulse">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200"></div>
                        <div className="ml-4 space-y-2">
                           <div className="h-4 w-24 bg-gray-200 rounded"></div>
                           <div className="h-3 w-32 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     <div className="h-9 w-20 bg-gray-200 rounded-md"></div>
                </td>
            </tr>
        ))}
    </>
);


const CustomerTable: React.FC<CustomerTableProps> = ({ customers, isLoading, error }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Propensity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Last Contact
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <TableSkeleton />
            ) : error ? (
              <tr>
                <td colSpan={5} className="text-center py-10 px-6">
                  <p className="text-red-500 font-medium">Error: {error}</p>
                </td>
              </tr>
            ) : customers.length === 0 ? (
                <tr>
                    <td colSpan={5} className="text-center py-10 px-6">
                        <p className="text-gray-500">No customers found.</p>
                    </td>
                </tr>
            ) : (
              customers.map((customer) => (
                <tr key={customer.customerId} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?u=${customer.customerId}`} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.firstName} {customer.lastName}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <PropensityBadge propensity={customer.investmentPropensity} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {customer.lastContactDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      Call
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
