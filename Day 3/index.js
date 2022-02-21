var name ="james";
var num = 1;
var verify = true;
var num2 = 2;


const student = {names = "john", age = 22}

function displayobject(){
document.getElementById("newstudent").innerHTML = student.names + " " + student.age;
}


function addition(){
    var sum = num + num2;
    var mul = num * num2;
    document.getElementById("new").innerHTML="HELLO"
document.getElementById("sum").innerHTML=sum
document.getElementById("mul").innerHTML=mul

console.log(sum);
console.log(mul);
return sum;
}


var picknum = document.getElementById("read").value;

function checkeven(){
    console.log(this.picknum);
    if(picknum%2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
