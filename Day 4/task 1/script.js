function data()
{
    var name = document.getElementById("username").value;
    var mail = document.getElementById("useremail").value;
    var detail = document.getElementById("sug").value;

    document.getElementById("accusername").innerHTML = name;
    document.getElementById("accuseremail").innerHTML = mail;
    document.getElementById("accsug").innerHTML = detail;
}