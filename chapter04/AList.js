function arrayToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--)
      list = {value: arr[i], rest: list};
    return list;
  }
  
  function listToArray(list) {
    var arr = [];
    while (list != null) {
      arr.push(list.value);
        list = list.rest;
    }
    return arr;
  }
  
  function prepend(n, list) {
    return {value: n, rest: list};
  }
  
  function nth(list, n) {
    for (var i = 0; i < n; i++) {
      if (list == null)
        return undefined;
      list = list.rest;
    }
    return list == null ? undefined : list.value;
  }