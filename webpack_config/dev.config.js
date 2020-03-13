const proxy = [
    { path: ['/api'], target: 'https://board.apluslabs.com'}
];
  
  module.exports = {
    ip: "0.0.0.0",
    port: 8001,
    proxy
  };
  