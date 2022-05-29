// Loop version
function every(array, test) {
  for (var i = 0; i < array.length; i++)
    if (!test(array[i]))
      return false;
  return true;
}

// Some version
function every(array, test) {
  return !array.some(n => !test(n));
}