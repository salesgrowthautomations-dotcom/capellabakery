// DARK MODE

const toggle=document.getElementById("dark-toggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode")

})


// COOKIE CONSENT

const cookieBox=document.getElementById("cookie-consent")

const accept=document.getElementById("accept-cookies")

if(accept){

accept.addEventListener("click",()=>{

cookieBox.style.display="none"

localStorage.setItem("cookies","accepted")

})

}

if(localStorage.getItem("cookies")){

if(cookieBox){

cookieBox.style.display="none"

}

}