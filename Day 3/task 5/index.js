function year(dateString)
{
    var a = document.getElementById("birth").value;
    var today = new Date;
    var birthDate = new Date(dateString);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
console.log(age);
}