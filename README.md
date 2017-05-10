[![Dependency Status](https://david-dm.org/dnode/dcache/status.svg)](https://david-dm.org/dnode/dcache)
[![devDependency Status](https://david-dm.org/dnode/dcache/dev-status.svg)](https://david-dm.org/dnode/dcache?type=dev)

# Installation

`npm i --save dcache`


# Examples

```javascript
const dcache = require('dcache')(client);
dcache(
  'key',
  (callback) => { callback('value'); },
  (value) => {}
);
```
