function myFunc(a, b) {
  if (b === 0) {
    return Infinity; // Handle division by zero
  } else if (a === 0 || b === 0) {
    return 0; // Handle case where a is zero but b is not
  }
  return a / b;
}