const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
const listennow = document.getElementById("listennow")
let login_status = false;

login.onclick = () => {
    let key_list = [];
    for (let i = 0; i < localStorage.length; i = i+1 ) {
        key_list.push(localStorage.key(i))
    }
    if (!key_list.includes(username.value)){
        alert("Your username is incorrect!")
    } else{
        let user = JSON.parse(localStorage.getItem(username.value));
        if (user.password !== password.value ){
            alert("Your password is incorrect");
        } else {
            alert("Login successfully");
            login_status = true;
            window.location.href="index.html";
            sessionStorage.setItem("login", "true");
        }
    }
};

