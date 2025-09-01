import { createStatCardElement } from './StatCard.js';
import { renderTableRows } from './CustomerTable.js';
import { CUSTOMERS } from '../data/customer-data.js';

const RefreshIcon = () => `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l-3.182-3.182a8.25 8.25 0 0111.664 0l3.182 3.182" />
    </svg>
`;

export function createDashboardElement() {
  // State for customers, initialized and sorted
  let customers = [...CUSTOMERS].sort((a, b) => b.timestamp.localeCompare(a.timestamp));

  const dashboardElement = document.createElement('div');
  dashboardElement.className = 'space-y-6';

  dashboardElement.innerHTML = `
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-slate-900">Wealth Management Dashboard</h1>
      <div class="flex items-center space-x-2">
          <select class="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>This Quarter</option>
              <option>Last Quarter</option>
              <option>This Year</option>
          </select>
      </div>
    </div>

    <!-- Statistics Grid -->
    <div id="stats-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>

    <!-- Customer Table Section -->
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-slate-800">Customer Call Queue</h2>
          <button
              id="refresh-button"
              aria-label="Refresh customer list"
              class="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
              ${RefreshIcon()}
              Refresh
          </button>
      </div>
      <div id="customer-table-container"></div>
    </div>
  `;

  // --- Populate Stats Grid ---
  const statsGrid = dashboardElement.querySelector('#stats-grid');
  const stats = [
    { title: "Calls Made Today", value: "84", change: "+12%", changeType: "increase" },
    { title: "Conversion Rate", value: "15.2%", change: "+1.8%", changeType: "increase" },
    { title: "QTD Revenue", value: "$1.2M", change: "-$50k", changeType: "decrease" },
    { title: "New Investments", value: "$3.5M", change: "+250k", changeType: "increase" },
  ];
  stats.forEach(stat => statsGrid.appendChild(createStatCardElement(stat)));
  
  // --- Populate and Manage Customer Table ---
  const tableContainer = dashboardElement.querySelector('#customer-table-container');
  tableContainer.innerHTML = `
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200">
        <thead class="bg-slate-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Account ID</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">State</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Phone</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Call Since</th>
            <th scope="col" class="relative px-6 py-3"><span class="sr-only">Call</span></th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-200">
        </tbody>
      </table>
    </div>
  `;

  const tableBody = tableContainer.querySelector('tbody');

  // Function to render/update the table body
  const updateTable = () => {
    tableBody.innerHTML = renderTableRows(customers);
  };
  
  // Initial table render
  updateTable();

  // --- Add Event Listener for Refresh Button ---
  const handleRefresh = () => {
    if (customers.length === 0) return;

    const newCustomers = [...customers];
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
    
    customers = newCustomers.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    
    updateTable();
  };
  
  dashboardElement.querySelector('#refresh-button').addEventListener('click', handleRefresh);

  return dashboardElement;
}
