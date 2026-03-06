document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function(e){
const href = this.getAttribute("href");
if(href.startsWith("#")){
e.preventDefault();
document.querySelector(href).scrollIntoView({
behavior:"smooth"
});
}
});
});
