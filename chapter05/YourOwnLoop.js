function loop(start, test, update, action) {
    for (var i = start; test(i); i = update(i))
      action(i);
  }