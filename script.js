// Smooth scroll for navigation

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e) {

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

if (target) {

target.scrollIntoView({

behavior: "smooth"

})

target.classList.add('visible')

}

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

// Dark mode toggle

const darkModeToggle = document.getElementById('dark-mode-toggle')

darkModeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode')
darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙'
})

// Testimonials slider

let currentTestimonial = 0
const testimonials = document.querySelectorAll('.testimonial')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

function showTestimonial(index) {
testimonials.forEach((t, i) => {
t.classList.remove('active')
if (i === index) t.classList.add('active')
})
}

prevBtn.addEventListener('click', () => {
currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
showTestimonial(currentTestimonial)
})

nextBtn.addEventListener('click', () => {
currentTestimonial = (currentTestimonial + 1) % testimonials.length
showTestimonial(currentTestimonial)
})

// Auto slide
setInterval(() => {
currentTestimonial = (currentTestimonial + 1) % testimonials.length
showTestimonial(currentTestimonial)
}, 5000)

// Initialize
showTestimonial(currentTestimonial)

// Animated counters

const counters = document.querySelectorAll('.counter')
const speed = 200

const animateCounters = () => {
counters.forEach(counter => {
const target = +counter.getAttribute('data-target')
const count = +counter.innerText
const inc = target / speed

if (count < target) {
counter.innerText = Math.ceil(count + inc)
setTimeout(animateCounters, 1)
} else {
counter.innerText = target
}
})
}

// Trigger on scroll
const statsSection = document.querySelector('#about')
let animated = false

window.addEventListener('scroll', () => {
if (!animated && statsSection.getBoundingClientRect().top < window.innerHeight) {
animateCounters()
animated = true
}
})

// Cookie consent

const cookieConsent = document.getElementById('cookie-consent')
const acceptBtn = document.getElementById('accept-cookies')

if (!localStorage.getItem('cookiesAccepted')) {
cookieConsent.classList.remove('hide')
}

acceptBtn.addEventListener('click', () => {
localStorage.setItem('cookiesAccepted', 'true')
cookieConsent.classList.add('hide')
})