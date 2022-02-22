function data(){

    var mob=0,ema=0,use=0;
    var email=document.getElementById("email").value;

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var mobile = document.getElementById("mobile").value;

    var p=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    
    var user=document.getElementById("user").value;
    
    var u=/^[a-zA-Z0-9]+$/;
            if(user.match(u))
            {
                us++;
            }
            if (phone.match(p)) {
    
            ph++;
            }
 
            if(re.test(email))
            {
                em++;
            }
            if(em==0)
            {
                alert("please check the email");
            }
            else if(mob==0){
                alert("please check the mobile number");
            }
            else if(use==0){
                alert("please check the username");
            }
            else{
                alert("login successfull");
            }
}