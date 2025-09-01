
export type InvestmentPropensity = 'High' | 'Medium' | 'Low';

export interface Customer {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investmentPropensity: InvestmentPropensity;
  lastContactDate: string;
}
