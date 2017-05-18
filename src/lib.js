module.exports = client => (key, fallback, callback, expire) => {
  client.getJSON(key, (err, value) => {
    let hit = true;
    if (value) {
      if (callback(value, hit)) {
        hit = false;
      }
    } else {
      hit = false;
    }
    if (!hit) {
      fallback(value => {
        callback(value);
        client.setJSON(key, value, () => {
          if (expire) {
            client.expire(key, expire);
          }
        });
      });
    }
  });
};
