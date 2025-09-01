import { Customer } from '../types.ts';

// The original URL might be blocked by CORS policy on the S3 bucket.
// Using a proxy is a common workaround for client-side applications to fetch data from servers without open CORS headers.
const CSV_URL = 'https://mobilecloud.s3.amazonaws.com/webapps/AB_CRM/wealth_management_customers_short.csv';
const PROXIED_CSV_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(CSV_URL)}`;

// A simple utility to convert snake_case to camelCase
const toCamelCase = (s: string): string => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};


export const fetchCustomers = async (): Promise<Customer[]> => {
  try {
    const response = await fetch(PROXIED_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();
    
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) {
      return []; // No data
    }
    
    const headers = lines[0].split(',').map(h => toCamelCase(h.trim()));
    
    const customers: Customer[] = lines.slice(1).map(line => {
      const values = line.split(',');
      const customerObject: any = {};
      headers.forEach((header, index) => {
        customerObject[header] = values[index]?.trim() || '';
      });
      return customerObject as Customer;
    });

    return customers;

  } catch (error) {
    console.error("Failed to fetch or parse customer data:", error);
    throw new Error("Could not load customer data. Please check the network connection and try again.");
  }
};