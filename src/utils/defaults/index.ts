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
