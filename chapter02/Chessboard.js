for (var i = 0; i < 8; i++) {
    var output = '';
    for (var j = 0; j < 8; j++)
      output += ((i + j) % 2 == 0) ? ' ' : '#';
    console.log(output);
  }