const mockData = [
  {
    id: 1,
    name: 'Freetown',
    population: '7,000,000',
    country: 'Sierra Leone',
    timeZone: 'Africa',
  },
  {
    id: 2,
    name: 'Accra',
    population: '8,000,000',
    country: 'Ghana',
    timeZone: 'Africa',
  },
  {
    id: 3,
    name: 'Lagos',
    population: '9,000,000',
    country: 'Nigeria',
    timeZone: 'Africa',
  },
];

export const setData = (paylaod) => { 
  mockData.push(paylaod);
};

export const getCurrentState = () => ({ state: mockData });
