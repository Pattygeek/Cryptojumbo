export * from './banks';

export const swapOptions: [string, string][] = [
  ['ETH', 'BTC'],
  ['ETH', 'USDT'],
  ['BTC', 'ETH'],
  ['BTC', 'USDT'],
  ['USDT', 'ETH'],
  ['USDT', 'BTC'],
];

export const coinFaucets = {
  BTC: 'https://live.blockcypher.com/btc/tx',
  ETH: 'https://ropsten.etherscan.io/tx/',
  USDT: 'https://ropsten.etherscan.io/tx/',
};

export const identificationTypes = [
  { value: 'bvn', name: 'BVN' },
  { value: 'voter', name: "Voter's Card" },
  { value: 'passport', name: 'Passport' },
  { value: 'national_id', name: 'National ID' },
  { value: 'driver_license', name: "Driver's License" },
];
