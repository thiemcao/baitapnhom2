
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const register = document.getElementById("register");
const password_2 = document.getElementById("password_2");


username.onchange = () => {
    if (username.value.length <= 6){
        alert("Username must have more than 6 letters")
    }
};

age.onchange = () => {
    if (age.value <= 17){
        alert("You must be above 18 year olds")
    }
};

email.onchange = () => {
    if (!email.value.includes("@gmail.com")){
     alert("Your email's format is incorrect")
};



register.onclick = () => {
    let key_list = [];
    for (let i = 0; i < localStorage.length; i = i+1 ) {
        key_list.push(localStorage.key(i))
    }
    if (key_list.includes(username.value)){
        alert("Registration Failed. Username existed");
    } else if (!key_list.includes(username.value) && username.value.length > 6 && age.value > 17 && email.value.includes("@gmail.com") && password_2.value === password.value){
        const user = {
            "name": name.value,
            "username": username.value,
            "age": age.value,
            "email": email.value,
            "password": password.value,
            "password_2":password_2.value,
        };
        localStorage.setItem(username.value, JSON.stringify(user));
        alert("Registration completed!");
        window.location.href = "dangnhap.html";
    } else {
        alert("Registration Failed. Please check again");
    }     
};
}
