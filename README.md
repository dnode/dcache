[![Dependency Status](https://david-dm.org/dnode/dcache.svg)](https://david-dm.org/dnode/dcache)
[![devDependency Status](https://david-dm.org/dnode/dcache/dev-status.svg)](https://david-dm.org/dnode/dcache#info=devDependencies)

# Example
```javascript
const dcache = require('dcache')(client);
dcache(
  'key',
  (callback) => { callback('value'); },
  (value) => {}
);
```
