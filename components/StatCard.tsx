
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, changeType }) => {
  const changeColor = changeType === 'positive' ? 'text-green-600' : 'text-red-600';

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-gray-100 rounded-full p-3 mr-4">
            {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
      <div className={`text-sm font-semibold ${changeColor}`}>
          {change}
      </div>
    </div>
  );
};

export default StatCard;
