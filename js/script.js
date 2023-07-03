let slideElement = document.getElementById("slide");
let buttonElement = document.getElementById("button");
let sizePassword = document.getElementById("valor");
let password = document.getElementById("password");
let containerPassword = document.getElementById("container-password");



let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";

let newPassword = "";


sizePassword.innerHTML = slideElement.value;


slideElement.oninput = function () {
    sizePassword.innerHTML = this.value;
    console.log(sizePassword);
};


buttonElement.onclick = () => {
    let pass = "";
    for (let i = 0, n = charset.length; i < slideElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    };

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
};


containerPassword.onclick = () => {
    navigator.clipboard.writeText(newPassword);
};



