const investments = [
  {
    id: 1,

    name: 'Acme Corp',

    previousNames: ['Acme Inc.', 'Acme Limited'],

    description: 'Manufacturing company specializing in explosive devices',

    foundedYear: 1960,

    headquarters: 'Los Angeles, CA',

    revenue: '$500M',

    valuation: '$1B',

    investmentValue: 2.5,

    status: 'Active',

    sector: 'Consumer Discretionary',

    createdDate: '2022-01-01',

    updatedDate: '2022-01-05',
  },

  {
    id: 2,

    name: 'XYZ Inc.',

    previousNames: ['X&Y Limited', 'XY Inc.'],

    description: 'Technology company that develops advanced AI algorithms',

    foundedYear: 2010,

    headquarters: 'San Francisco, CA',

    revenue: '$200M',

    valuation: '$500M',

    investmentValue: 1.5,

    status: 'Active',

    sector: 'Information Technology',

    createdDate: '2022-02-10',

    updatedDate: '2022-02-15',
  },

  {
    id: 3,

    name: 'Eliptix',

    previousNames: ['Elliptix', 'ElipTex'],

    description:
      'Medical device company that develops innovative solutions for treating heart disease',

    foundedYear: 2005,

    headquarters: 'Boston, MA',

    revenue: '$100M',

    valuation: '$300M',

    investmentValue: 2.0,

    status: 'Active',

    sector: 'Healthcare',

    createdDate: '2022-03-20',

    updatedDate: '2022-03-25',
  },

  {
    id: 4,

    name: 'Phoenix Bio',

    previousNames: ['Phoenix Bioscience', 'Pheonix Bio'],

    description: 'Biotech company developing novel treatments for cancer',

    foundedYear: 2012,

    headquarters: 'New York, NY',

    revenue: '$50M',

    valuation: '$150M',

    investmentValue: 3.0,

    status: 'Active',

    sector: 'Healthcare',

    createdDate: '2022-04-15',

    updatedDate: '2022-04-20',
  },

  {
    id: 5,

    name: '1st Street Hospitality',

    previousNames: ['First St. Hospitality', '1st Street Hotel Group'],

    description: 'Hospitality company that owns and operates luxury hotels',

    foundedYear: 2000,

    headquarters: 'Miami, FL',

    revenue: '$150M',

    valuation: '$400M',

    investmentValue: 2.67,

    status: 'Active',

    sector: 'Healthcare',

    createdDate: '2022-05-10',

    updatedDate: '2022-05-15',
  },

  {
    id: 6,

    name: 'GloboTech',

    previousNames: ['Globo Tech', 'Globotech Inc.'],

    description: 'Provider of enterprise software solutions',

    foundedYear: 1998,

    headquarters: 'Austin, TX',

    revenue: '$300M',

    valuation: '$1.2B',

    investmentValue: 4.0,

    status: 'Active',

    sector: 'Information Technology',

    createdDate: '2022-06-25',

    updatedDate: '2022-06-30',
  },

  {
    id: 7,

    name: 'BamBoo Health',

    previousNames: ['BamBo Health', 'BambooHealth'],

    description:
      'Digital health company that provides personalized health and wellness solutions',

    foundedYear: 2015,

    headquarters: 'Seattle, WA',

    revenue: '$25M',

    valuation: '$100M',

    investmentValue: 2.0,

    status: 'Active',

    sector: 'Healthcare',

    createdDate: '2022-07-10',

    updatedDate: '2022-07-15',
  },

  {
    id: 8,

    name: 'Fenix Industries',

    previousNames: ['Fenix Ind.', 'Phoenix Industries'],

    description: 'Manufacturer of high-performance automotive components',

    foundedYear: 1985,

    headquarters: 'Detroit, MI',

    revenue: '$75M',

    valuation: '$200M',

    investmentValue: 2.67,

    status: 'Active',

    sector: 'Information Technology',

    createdDate: '2022-08-05',

    updatedDate: '2022-08-10',
  },

  {
    id: 9,

    name: 'GreenGen',

    previousNames: ['Green Gen', 'GreenGen Inc.'],

    description:
      'Renewable energy company specializing in wind and solar power',

    foundedYear: 2010,

    headquarters: 'Denver, CO',

    revenue: '$100M',

    valuation: '$500M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Environment & Renewables',

    createdDate: '2022-09-20',

    updatedDate: '2022-09-25',
  },

  {
    id: 10,

    name: 'Jupiter Mining',

    previousNames: ['Jupiter Mines', 'Jupiter Mining'],

    description: 'Mining company that extracts precious metals and minerals',

    foundedYear: 2002,

    headquarters: 'Houston, TX',

    revenue: '$50M',

    valuation: '$150M',

    investmentValue: 3.0,

    status: 'Active',

    createdDate: '2022-10-15',

    updatedDate: '2022-10-20',
  },

  {
    id: 11,

    name: 'Nexus Capital Partners',

    previousNames: ['Nexus Cap. & Partners', 'Nexus Capital'],

    description: 'Private equity firm that invests in mid-market companies',

    foundedYear: 2005,

    headquarters: 'Chicago, IL',

    revenue: '$250M',

    valuation: '$1B',

    investmentValue: 4.0,

    status: 'Active',

    sector: 'Financials',

    createdDate: '2022-11-10',

    updatedDate: '2022-11-15',
  },

  {
    id: 12,

    name: 'Octave Music',

    previousNames: ['Octave Inc.', 'Octave Technologies'],

    description:
      'Music streaming service that uses AI to curate personalized playlists',

    foundedYear: 2012,

    headquarters: 'New York, NY',

    revenue: '$100M',

    valuation: '$500M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Information Technology',

    createdDate: '2022-12-05',

    updatedDate: '2022-12-10',
  },

  {
    id: 13,

    name: 'Quantum Analytics',

    previousNames: ['Quantum Analysis', 'Quantam Analytics'],

    description:
      'Provider of advanced data analytics and machine learning solutions',

    foundedYear: 2010,

    headquarters: 'San Diego, CA',

    revenue: '$50M',

    valuation: '$250M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Information Technology',

    createdDate: '2023-01-20',

    updatedDate: '2023-01-25',
  },

  {
    id: 14,

    name: 'Redwood Robotics',

    previousNames: ['Redwood Robotix', 'Redwood Robotocs'],

    description: 'Developer of advanced robotics and automation systems',

    foundedYear: 2015,

    headquarters: 'Palo Alto, CA',

    revenue: '$20M',

    valuation: '$100M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Information Technology',

    createdDate: '2023-02-15',

    updatedDate: '2023-02-20',
  },

  {
    id: 15,

    name: 'Sigma Health',

    previousNames: ['Sigma Healthcare'],

    description: 'Healthcare provider that offers a wide range of services',

    foundedYear: 1990,

    headquarters: 'Atlanta, GA',

    revenue: '$500M',

    valuation: '$2B',

    investmentValue: 4.0,

    status: 'Active',

    sector: 'Healthcare',

    createdDate: '2023-03-10',

    updatedDate: '2023-03-15',
  },

  {
    id: 16,

    name: 'Terra Nova',

    previousNames: ['TerraNovaa', 'Terra Nova Tech'],

    description: 'Provider of sustainable agriculture solutions',

    foundedYear: 2010,

    headquarters: 'Portland, OR',

    revenue: '$30M',

    valuation: '$150M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Agriculture',

    createdDate: '2023-04-05',

    updatedDate: '2023-04-10',
  },

  {
    id: 17,

    name: 'Universal Aerospace',

    previousNames: ['Universal Aer>>>o', 'Universal Aerospace Inc.'],

    description: 'Manufacturer of aircraft components and systems',

    foundedYear: 2000,

    headquarters: 'Seattle, WA',

    revenue: '$100M',

    valuation: '$500M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Aerospace',

    createdDate: '2023-05-01',

    updatedDate: '2023-05-04',
  },

  {
    id: 18,

    name: 'Velocity Capital',

    description: 'Venture capital firm that invests in early-stage startups',

    foundedYear: 2010,

    headquarters: 'San Francisco, CA',

    revenue: '$10M',

    valuation: '$100M',

    investmentValue: 10.0,

    status: 'Active',

    sector: 'Financials',

    createdDate: '2023-06-01',

    updatedDate: '2023-06-05',
  },

  {
    id: 19,

    name: 'Watershed Energy',

    previousNames: ['Watershed Power', 'Watershed Technologies'],

    description: 'Provider of renewable energy solutions',

    foundedYear: 2008,

    headquarters: 'Denver, CO',

    revenue: '$50M',

    valuation: '$250M',

    investmentValue: 5.0,

    status: 'Active',

    sector: 'Environment & Renewables',

    createdDate: '2023-07-01',

    updatedDate: '2023-07-05',
  },

  {
    id: 20,

    name: 'Xenon Pharmaceuticals',

    previousNames: ['Xenon Pharma', 'Xenon Pharm'],

    description:
      'Pharmaceutical company that develops innovative treatments for rare diseases',

    foundedYear: 1996,

    headquarters: 'Vancouver, BC',

    revenue: '$75M',

    valuation: '$500M',

    investmentValue: 6.67,

    status: 'Active',

    sector: 'Healthcare',

    createdDate: '2023-08-01',

    updatedDate: '2023-08-05',
  },
]

export default investments
