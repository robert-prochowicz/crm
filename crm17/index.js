// --- Data ---
const CUSTOMERS = [
  { timestamp: '2025-08-29 18:19:31', account_id: 70711985, first_name: 'Kennethx', last_name: 'Gutierrez', age: 60, phone: '(280) 302-7847', state: 'WI' },
  { timestamp: '2025-08-29 17:45:12', account_id: 83294012, first_name: 'Brenda', last_name: 'Simmons', age: 45, phone: '(555) 123-4567', state: 'CA' },
  { timestamp: '2025-08-29 17:30:55', account_id: 19837456, first_name: 'Arthur', last_name: 'Morgan', age: 52, phone: '(212) 987-6543', state: 'NY' },
  { timestamp: '2025-08-29 16:59:01', account_id: 45209873, first_name: 'Linda', last_name: 'Harris', age: 38, phone: '(312) 555-8899', state: 'IL' },
  { timestamp: '2025-08-29 16:21:48', account_id: 67345109, first_name: 'Robert', last_name: 'Miller', age: 65, phone: '(713) 234-5678', state: 'TX' },
  { timestamp: '2025-08-29 15:55:23', account_id: 90123847, first_name: 'Patricia', last_name: 'Davis', age: 41, phone: '(215) 876-5432', state: 'PA' },
  { timestamp: '2025-08-29 15:10:07', account_id: 34567812, first_name: 'James', last_name: 'Wilson', age: 58, phone: '(602) 345-6789', state: 'AZ' },
  { timestamp: '2025-08-29 14:48:19', account_id: 56781234, first_name: 'Jennifer', last_name: 'Moore', age: 49, phone: '(206) 789-0123', state: 'WA' },
  { timestamp: '2025-08-29 14:02:51', account_id: 89012345, first_name: 'Michael', last_name: 'Taylor', age: 33, phone: '(303) 456-7890', state: 'CO' },
  { timestamp: '2025-08-29 13:33:14', account_id: 23456789, first_name: 'Mary', last_name: 'Anderson', age: 71, phone: '(617) 901-2345', state: 'MA' },
  { timestamp: '2025-08-29 11:05:30', account_id: 54321098, first_name: 'David', last_name: 'Thomas', age: 29, phone: '(404) 567-8901', state: 'GA' },
  { timestamp: '2025-08-29 10:15:22', account_id: 98765432, first_name: 'Susan', last_name: 'Jackson', age: 55, phone: '(305) 123-4567', state: 'FL' }
];

// --- Component: StatCard ---
const ArrowUpIcon = () => `
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
`;
const ArrowDownIcon = () => `
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
`;
function createStatCardElement({ title, value, change, changeType }) {
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

// --- Component: CustomerTable ---
const PhoneIcon = () => `
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
`;
function renderTableRows(customers) {
  return customers.map(customer => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm font-medium text-slate-900">${customer.first_name} ${customer.last_name}</div>
        <div class="text-sm text-slate-500">Age: ${customer.age}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">${customer.account_id}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">${customer.state}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">${customer.phone}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">${customer.timestamp}</td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          ${PhoneIcon()}
          Call
        </button>
      </td>
    </tr>
  `).join('');
}

// --- Component: Header ---
const SalesforceLogo = () => `
    <svg role="img" viewBox="0 0 100 70" width="60" height="42" class="text-white">
        <path fill="currentColor" d="M72.5,0C61.2,0,52,9.2,52,20.5S61.2,41,72.5,41s20.5-9.2,20.5-20.5S83.8,0,72.5,0z M72.5,32.8 c-6.8,0-12.3-5.5-12.3-12.3S65.7,8.2,72.5,8.2S84.8,13.7,84.8,20.5S79.3,32.8,72.5,32.8z M20.5,28C9.2,28,0,37.2,0,48.5 S9.2,69,20.5,69S41,59.8,41,48.5S31.8,28,20.5,28z M20.5,60.8c-6.8,0-12.3-5.5-12.3-12.3S13.7,36.2,20.5,36.2S32.8,41.7,32.8,48.5 S27.3,60.8,20.5,60.8z"></path>
    </svg>
`;
const UserIcon = () => `
    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
`;
const SearchIcon = () => `
    <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
`;
function createHeaderElement() {
    const header = document.createElement('header');
    header.className = "bg-white shadow-sm sticky top-0 z-10";
    header.innerHTML = `
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="bg-blue-600 p-2 rounded-md mr-4">
                        ${SalesforceLogo()}
                    </div>
                    <nav class="hidden md:flex md:space-x-8">
                        <a href="#" class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Home</a>
                        <a href="#" class="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Dashboard</a>
                        <a href="#" class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Reports</a>
                        <a href="#" class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Clients</a>
                    </nav>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="relative hidden sm:block">
                        <input type="text" placeholder="Search..." class="bg-slate-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" />
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            ${SearchIcon()}
                        </div>
                    </div>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                       + New
                    </button>
                    <div class="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center">
                        ${UserIcon()}
                    </div>
                </div>
            </div>
        </div>
    `;
    return header;
};

// --- Component: Dashboard ---
const RefreshIcon = () => `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l-3.182-3.182a8.25 8.25 0 0111.664 0l3.182 3.182" />
    </svg>
`;
function createDashboardElement() {
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
    <div id="stats-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-slate-800">Customer Call Queue</h2>
          <button id="refresh-button" aria-label="Refresh customer list" class="inline-flex items-center px-3 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              ${RefreshIcon()} Refresh
          </button>
      </div>
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
          <tbody class="bg-white divide-y divide-slate-200"></tbody>
        </table>
      </div>
    </div>
  `;

  const statsGrid = dashboardElement.querySelector('#stats-grid');
  const stats = [
    { title: "Calls Made Today", value: "84", change: "+12%", changeType: "increase" },
    { title: "Conversion Rate", value: "15.2%", change: "+1.8%", changeType: "increase" },
    { title: "QTD Revenue", value: "$1.2M", change: "-$50k", changeType: "decrease" },
    { title: "New Investments", value: "$3.5M", change: "+250k", changeType: "increase" },
  ];
  stats.forEach(stat => statsGrid.appendChild(createStatCardElement(stat)));

  const tableBody = dashboardElement.querySelector('tbody');
  const updateTable = () => { tableBody.innerHTML = renderTableRows(customers); };
  updateTable();

  const handleRefresh = () => {
    if (customers.length === 0) return;
    const newCustomers = [...customers];
    const randomIndex = Math.floor(Math.random() * newCustomers.length);
    const now = new Date();
    const pad = (num) => String(num).padStart(2, '0');
    newCustomers[randomIndex].timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    customers = newCustomers.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    updateTable();
  };
  
  dashboardElement.querySelector('#refresh-button').addEventListener('click', handleRefresh);

  return dashboardElement;
}

// --- App ---
function renderApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Could not find root element to mount to");
    return;
  }
  rootElement.innerHTML = '';

  const appContainer = document.createElement('div');
  appContainer.className = 'min-h-screen font-sans text-slate-800';
  
  const mainContent = document.createElement('main');
  mainContent.className = 'p-4 sm:p-6 lg:p-8';
  
  mainContent.appendChild(createDashboardElement());
  appContainer.appendChild(createHeaderElement());
  appContainer.appendChild(mainContent);
  
  rootElement.appendChild(appContainer);
}

// --- Entry Point ---
renderApp();
