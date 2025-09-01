const ArrowUpIcon = () => `
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
`;

const ArrowDownIcon = () => `
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
`;

export function createStatCardElement({ title, value, change, changeType }) {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-600' : 'text-red-600';
  const changeBgColor = isIncrease ? 'bg-green-100' : 'bg-red-100';

  const card = document.createElement('div');
  card.className = "bg-white rounded-lg shadow p-5";
  card.innerHTML = `
    <p class="text-sm font-medium text-slate-500 truncate">${title}</p>
    <div class="mt-1 flex items-baseline justify-between">
      <p class="text-3xl font-semibold text-slate-900">${value}</p>
      <div class="flex items-center text-sm font-semibold ${changeColor} ${changeBgColor} rounded-full px-2 py-0.5">
          ${isIncrease ? ArrowUpIcon() : ArrowDownIcon()}
          <span class="ml-1">${change}</span>
      </div>
    </div>
    <p class="text-xs text-slate-400 mt-2">vs. previous period</p>
  `;
  return card;
}
