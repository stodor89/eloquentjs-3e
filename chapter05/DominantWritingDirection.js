function dominantDirection(text) {
  return countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  }).filter(n => n.name != null).reduce((n0, n1) => {
    return n0.count > n1.count ? n0 : n1;
  }).name;
}