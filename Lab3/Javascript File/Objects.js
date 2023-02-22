let user = {};
user.name = "john";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2-task
function isEmpty(obj){
    for(ele in obj){
        return false;
    }
    return true;
}

//3-task
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum ;
for(let i in salaries){
    sum+= salaries[i];
}
alert(sum)

//4-task
function multiplyNumeric(obj){
    for(let i in obj){
        if(typeof obj[i]=='number'){
            obj[i]*= 2;
        }
    }
}