# Incorrect Zero Handling in Division Function

This repository demonstrates a common yet subtle bug in JavaScript related to handling zero values in division. The original code incorrectly returns 0 when either of the inputs is zero, instead of correctly handling the case where b is zero.

The solution provided addresses this issue by explicitly checking for the divisor being zero and returns `Infinity` if it is.  Additional error handling or alternative return values can be implemented to match specific needs.

## Bug

The `bug.js` file contains the original, buggy code. This function always returns 0, even if only one argument is zero. This is incorrect behavior for division.

## Solution

The `bugSolution.js` file demonstrates a corrected version, handling the division by zero case appropriately. The corrected function handles both cases: if the divisor is zero, it returns Infinity; otherwise it executes the division as intended. 
