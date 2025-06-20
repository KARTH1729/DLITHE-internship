// Fibonacci series up to n terms.

let n = 5, a = 0, b = 1;
 console.log(a);
 console.log(b);
 for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
 }