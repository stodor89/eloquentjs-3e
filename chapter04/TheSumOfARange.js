function range(start, end, step = 1) {
    var list = [];
    if (step > 0)
        for (var i = start; i <= end; i += step)
        list.push(i);
    else
      for (var i = start; i >= end; i += step)
        list.push(i);
    return list;
  }
  
  function sum(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++)
      sum += list[i];
    return sum;
  }