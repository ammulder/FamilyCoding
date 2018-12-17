module.exports = {
  profile: 'dragonlock',
  region: 'us-east-1',
  handler: 'index.default',
  role: 'arn:aws:iam::238908776788:role/CombinedLambda',
  timeout: 10,
  memorySize: 1024,
  publish: false,
  runtime: 'nodejs8.10',
  functionName: 'MapCombined'
};
