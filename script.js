function digit_in(x)
{
    let d = x.length
    for (i=0; i < d; i++)
    {
       
        if (x.charCodeAt(i) >= 48 && x.charCodeAt (i) <=57)
        return true;
    }

    return false;
}

function checkit() {
    let password = document.getElementById("password").value;
    
    let d = password.length;

    if (password == "")
    document.getElementById("result").innerHTML = '<span style="color:red;">Please, enter the password!</span>'

    else if (d >= 7 && digit_in(password))
    document.getElementById("result").innerHTML = '<span style="color:green;">GOOD PASSWORD!</span>'

    else if (d >= 4 && d <= 6 &&digit_in(password))
    document.getElementById("result").innerHTML = '<span style="color:blue;">NORMAL PASSWORD!</span>'

    else document.getElementById("result").innerHTML = '<span style="color:yellow;">BAD PASSWORD!</span>'
}   