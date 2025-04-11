let haslo = document.querySelector(".haslo");
let login = document.querySelector(".login");
let bottom = document.querySelector(".bottom");



bottom.onclick = function() {
    console.log(haslo.value)
    console.log(login.value)
    if(
        haslo.value === "admin"&& login.value === "admin"
    ){
        window.location.href = "endpoints.html"
    }
}