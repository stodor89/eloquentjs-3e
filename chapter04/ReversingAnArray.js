function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--)
      reversed.push(arr[i]);
    return reversed;
  }
  
  function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
      let mirroredIndex = arr.length - 1 - i;
      let temp = arr[i];
      arr[i] = arr[mirroredIndex];
      arr[mirroredIndex] = temp;
    }
  }