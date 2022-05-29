function countChar(text, c) {
    var count = 0;
    for (var i = 0; i < text.length; i++)
      if (text[i] == c)
        count++;
    return count;
  }
  
  let countBs = (text) => countChar(text, 'B');