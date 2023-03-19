function passwordCheck() {
    console.log(password1.value.length)
    if (password1.value != "" && password2.value != "" && password1.value != password2.value){
// password1.style["border"] = "red solid .5px"
// password2.style["border"] = "red solid .5px"
password1.setCustomValidity("Invalid field.")
password2.setCustomValidity("Invalid field.")
document.getElementById("Message").innerHTML = "Passwords do Not Match"
document.getElementById("Message").style.color = "Red"
}
else if (password1.value.length < 7){
    password1.setCustomValidity("Invalid field.")
    document.getElementById("Message").innerHTML = "Password must be 8 characters long"
    document.getElementById("Message").style.color = "Red"
}
    else if (password1.value.length > 7 && password1.value != "" && password2.value != "" && password1.value == password2.value){
    
    password1.setCustomValidity("")
    password2.setCustomValidity("")
    document.getElementById("Message").innerHTML = "Passwords Match"
    document.getElementById("Message").style.color = "Green"
}
else if (password1.value.length >= 7){
    document.getElementById("Message").innerHTML = ""
    password1.setCustomValidity("")
    password2.setCustomValidity("")
}
}


let password1 = document.querySelector('#password')
let password2 = document.querySelector('#passwordConfirm')

password2.addEventListener("change", passwordCheck)
password1.addEventListener("change", passwordCheck)
