
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const ArrowUpIcon: React.FC = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
);

const ArrowDownIcon: React.FC = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
);

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-600' : 'text-red-600';
  const changeBgColor = isIncrease ? 'bg-green-100' : 'bg-red-100';

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <p className="text-sm font-medium text-slate-500 truncate">{title}</p>
      <div className="mt-1 flex items-baseline justify-between">
        <p className="text-3xl font-semibold text-slate-900">{value}</p>
        <div className={`flex items-center text-sm font-semibold ${changeColor} ${changeBgColor} rounded-full px-2 py-0.5`}>
            {isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <span className="ml-1">{change}</span>
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-2">vs. previous period</p>
    </div>
  );
};

export default StatCard;
