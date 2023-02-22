for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }
//2-task
  let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
//3-task
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
//4-task
let n = 10;

Prime:
for (let i = 2; i <= n; i++) { 

    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue Prime; 
    }

    alert( i ); 
}