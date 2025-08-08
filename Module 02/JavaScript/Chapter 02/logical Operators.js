// Logical Operators

//  and - or - not
//  &&  - || -  !


// Logical Operators
// Logical AND (&&): Returns true if both operands are true, otherwise returns false.
let x = 5;
let y = 10;
let result1 = (x < 10 && y > 5); // true because both conditions are true

// Logical OR (||): Returns true if at least one operand is true, otherwise returns false.
let ab = 3;
let ba = 8;
let result2 = (ab < 2 || ba > 5); // true because at least one condition is true

// Logical NOT (!): Returns true if the operand is false, and vice versa.
let c = true;
let result3 = !c; // false, because c is true and ! flips it to false

// Example of combining logical operators:
let isValid = (x > 0 && y < 20) || (a === 3 && b !== 7);
