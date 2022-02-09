let user = prompt ("Who you are?");
if (user == "admin") {
    let pass = prompt("Password: ");
    if (pass == "123") {
        alert("Welcome " + user);
    } else if (pass != "123"){
        alert("Invalid Password!");
    } else if (pass == 0){
        alert("Closed!");
    }
} else if (user != "admin"){
    alert("User cannot be found!");
} else if (user == ""){
    alert ("Closed!");
}