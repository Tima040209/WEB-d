//1-task
let x = +prompt("The first number?", "");
let y = +prompt("The second number?", "");
alert( x + y );
//2-task
alert(Math.round(6.35*10)/10);
//3-task
function readNumber(){
    let n;
    do{
        n = prompt("Write number",0);
    }while(!isFinite(n));
    if (n === null || n === '') return null;

    return +n;
}
alert(n);
//4-task
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert(random(1, 5));
  alert(random(1, 5));
  alert(random(1, 5));