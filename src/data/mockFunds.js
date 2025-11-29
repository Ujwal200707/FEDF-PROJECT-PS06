// Mock mutual funds data
const mockFunds = [
  {
    id: 1,
    name: 'Growth Fund A',
    type: 'Equity',
    risk: 'High',
    returns: '12.5%',
    aum: '$2.5B',
    expenseRatio: '1.2%',
    description: 'Focuses on long-term capital growth through equity investments.',
    factors: ['Market volatility', 'Economic conditions', 'Company performance'],
    structure: 'Open-ended mutual fund investing in large-cap stocks.'
  },
  {
    id: 2,
    name: 'Balanced Fund B',
    type: 'Balanced',
    risk: 'Medium',
    returns: '8.3%',
    aum: '$1.8B',
    expenseRatio: '0.8%',
    description: 'Provides a mix of growth and income with moderate risk.',
    factors: ['Interest rates', 'Bond yields', 'Stock market performance'],
    structure: 'Balanced allocation between stocks and bonds.'
  },
  {
    id: 3,
    name: 'Bond Fund C',
    type: 'Fixed Income',
    risk: 'Low',
    returns: '4.2%',
    aum: '$3.2B',
    expenseRatio: '0.6%',
    description: 'Invests in government and corporate bonds for steady income.',
    factors: ['Interest rate changes', 'Credit quality', 'Inflation'],
    structure: 'Fixed income securities with varying maturities.'
  },
  {
    id: 4,
    name: 'Index Fund D',
    type: 'Index',
    risk: 'Medium',
    returns: '10.1%',
    aum: '$4.1B',
    expenseRatio: '0.15%',
    description: 'Tracks major market indices for broad market exposure.',
    factors: ['Market trends', 'Index performance', 'Tracking error'],
    structure: 'Passively managed fund mirroring market indices.'
  },
  {
    id: 5,
    name: 'Small Cap Fund E',
    type: 'Equity',
    risk: 'High',
    returns: '15.2%',
    aum: '$850M',
    expenseRatio: '1.5%',
    description: 'Invests in small-cap companies with high growth potential.',
    factors: ['Market volatility', 'Company growth', 'Economic cycles'],
    structure: 'Open-ended fund focused on small-cap equities.'
  },
  {
    id: 6,
    name: 'International Fund F',
    type: 'International',
    risk: 'High',
    returns: '9.8%',
    aum: '$2.1B',
    expenseRatio: '1.1%',
    description: 'Provides exposure to international markets and currencies.',
    factors: ['Currency fluctuations', 'Geopolitical events', 'Global economy'],
    structure: 'Diversified international equity portfolio.'
  },
  {
    id: 7,
    name: 'Conservative Fund G',
    type: 'Conservative',
    risk: 'Low',
    returns: '3.5%',
    aum: '$1.5B',
    expenseRatio: '0.7%',
    description: 'Low-risk investment focused on capital preservation.',
    factors: ['Interest rates', 'Inflation', 'Market stability'],
    structure: 'Conservative mix of bonds and stable assets.'
  },
  {
    id: 8,
    name: 'Tech Sector Fund H',
    type: 'Sector',
    risk: 'High',
    returns: '18.7%',
    aum: '$3.8B',
    expenseRatio: '1.3%',
    description: 'Specialized fund investing in technology sector companies.',
    factors: ['Tech industry trends', 'Innovation cycles', 'Competition'],
    structure: 'Sector-specific equity fund focused on technology.'
  },
  {
    id: 9,
    name: 'Emerging Markets Fund I',
    type: 'Emerging Markets',
    risk: 'High',
    returns: '11.4%',
    aum: '$1.2B',
    expenseRatio: '1.4%',
    description: 'Invests in emerging market economies with growth potential.',
    factors: ['Political stability', 'Currency risk', 'Economic development'],
    structure: 'Emerging markets equity and debt securities.'
  },
  {
    id: 10,
    name: 'Real Estate Fund J',
    type: 'Real Estate',
    risk: 'Medium',
    returns: '7.9%',
    aum: '$950M',
    expenseRatio: '0.9%',
    description: 'Invests in real estate investment trusts and properties.',
    factors: ['Real estate market', 'Interest rates', 'Property values'],
    structure: 'REITs and real estate-related securities.'
  }
];

export default mockFunds;
