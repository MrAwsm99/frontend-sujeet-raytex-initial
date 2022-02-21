function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("pass").value;

    if(username == "sujeet" || password == "abc123")
    {
        console.log("successful")
    }
    else
    {
        console.log("wrong username or password")
        }
}