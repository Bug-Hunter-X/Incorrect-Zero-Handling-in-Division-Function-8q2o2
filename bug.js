function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is the bug. It always returns 0 even if only one is zero
  }
  return a / b;
}