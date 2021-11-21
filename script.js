function checkit() {
    var password = document.getElementById("password").value;
    
    var d = password.length;

    if (password == "")
    document.getElementById("result").innerHTML = '<span style="color:red;">Please, enter the password!</span>'

    
}