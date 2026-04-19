const redis = require('redis');
const client = redis.createClient();

module.exports = {
  get: (key) => client.get(key),
  set: (key, value) => client.set(key, value),
  delete: (key) => client.del(key)
};