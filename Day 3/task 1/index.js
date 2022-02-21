function prime(){
    var n, i, flag = true;
    n = document.getElementById("check").value;
    for(i = 2; i <= n - 1; i++)
       if(n%i == 0)
       {
           flag = false;
           break;
       }

       if(flag == true)
       {
       console.log("number is prime")
       }
       else{
        console.log("number is not prime")
       }
}
