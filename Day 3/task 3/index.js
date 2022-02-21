function fibonacci() {
    const a = document.getElementById("number").value;
    let n1 = 0, n2 = 1, nextTerm;
    
    console.log("fibonacci series")
    for(let i = 1; i<=a; i++)
    {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}