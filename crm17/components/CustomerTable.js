const PhoneIcon = () => `
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
`;

export function renderTableRows(customers) {
  return customers.map(customer => `
    <tr key="${customer.account_id}" class="hover:bg-slate-50 transition-colors">
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
