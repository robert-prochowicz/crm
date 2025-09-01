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


export function createHeaderElement() {
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
