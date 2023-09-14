function digitalRoot(n) {
  if (n  < 10) {
    return n;
  } else {
    return digitalRoot(sum(n));
  }
}
function sum(n) {
  if (n / 10 == 0) {
    return 0;
  } else {
    return (n % 10) + sum(parseInt(n / 10));
  }
}
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}