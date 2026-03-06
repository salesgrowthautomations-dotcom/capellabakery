// Smooth scroll for navigation

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e) {

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

target.scrollIntoView({
behavior: "smooth"
})

})

})

// Back to top button

const backToTopBtn = document.getElementById('back-to-top')

window.addEventListener('scroll', () => {

if (window.scrollY > 300) {

backToTopBtn.classList.add('show')

} else {

backToTopBtn.classList.remove('show')

}

})

backToTopBtn.addEventListener('click', () => {

window.scrollTo({

top: 0,

behavior: 'smooth'

})

})

// Image modal

const modal = document.getElementById('image-modal')
const modalImg = document.getElementById('modal-img')
const closeBtn = document.getElementsByClassName('close')[0]

document.querySelectorAll('.menu-img, .gallery-img').forEach(img => {
img.addEventListener('click', () => {
modal.style.display = 'block'
modalImg.src = img.src
})
})

closeBtn.addEventListener('click', () => {
modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.display = 'none'
}
})

// Fade-in animation on scroll

const fadeElements = document.querySelectorAll('.fade-in')

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible')
}
})
}, { threshold: 0.1 })

fadeElements.forEach(el => observer.observe(el))

// Loading screen

window.addEventListener('load', () => {
setTimeout(() => {
document.getElementById('loading').classList.add('hide')
}, 1000)
})