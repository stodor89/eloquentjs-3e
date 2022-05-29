function deepEqual(x, y) {
    if (typeof x == "object" && x != null && typeof y == "object" && y != null) {
      let xKeys = Object.keys(x);
      let yKeys = Object.keys(y);
      if (xKeys.length != yKeys.length)
        return false;
      for (var key of xKeys) {
        if (key in y) {
          if (!deepEqual(x[key], y[key]))
            return false;
        } else {
          return false;
        }
      }
      return true;
    } else {
      return x === y;
    }
  }