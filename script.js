var item_box = document.querySelector(".item-box")
const _slides = document.querySelector(".slides")

const previous_button = document.querySelector("#previous")
const next_button = document.querySelector("#next")

var testimonials = [{
    "name": "Tanya Sinclair", "role": "UX Engineer",
    "testimony": "I’ve been interested in coding for " +
        "a while but never taken the jump, until now." +
        "I couldn’t recommend this course enough. " +
        "I’m now in the job of my dreams and so excited about the future.",
    "photo": "url(images/image-tanya.jpg)"
}, {
    "name": "John Tarkpor", "role": "Front-end Developer",
    "testimony": "If you want to lay the best foundation" +
        " possible I’d recommend taking this course." +
        "The depth the instructors go into is incredible." +
        "I now feel so confident about starting up as a professional developer.",
    "photo": "url(images/image-john.jpg)"
}]


const size = item_box.clientWidth
counter = 0

let _quotes = item_box.children[0]
let _quotes_children = _quotes.children
_quotes_children[0].innerHTML = "\"" + testimonials[0].testimony + "\""
_quotes_children[1].innerHTML = "<strong>" + testimonials[0].name + "<strong>"
_quotes_children[2].innerHTML = testimonials[0].role
let photo = item_box.children[1]
photo.style.backgroundImage = testimonials[0].photo


next_button.addEventListener("click", function () {
    counter++
    fire_slide(counter)
    _slides.style.transition = 'transform 0.3s ease-in-out'
    _slides.style.transform = 'translateX(' + (-size) + 'px)'
})

previous_button.addEventListener("click", function () {
    counter--
    fire_slide_backwards(counter)
    _slides.style.transition = 'transform 0.3s ease-in-out'
    _slides.style.transform = 'translateX(' + (size) + 'px)'
})

_slides.addEventListener("transitionend", function () {
    _slides.style.transform = 'none'
})

function fire_slide(slide) {
    if (slide >= testimonials.length) {
        slide = 0
        counter = 0
    }
    let _quotes = item_box.children[0]
    let _quotes_children = _quotes.children
    _quotes_children[0].innerHTML = testimonials[slide].testimony
    _quotes_children[1].innerHTML = "<strong>" + testimonials[slide].name + "<strong>"
    _quotes_children[2].innerHTML = testimonials[slide].role
    let photo = item_box.children[1]
    photo.style.backgroundImage = testimonials[slide].photo
}

function fire_slide_backwards(slide) {
    if (slide === -1) {
        slide = testimonials.length - 1
        counter = testimonials.length - 1
    }
    let _quotes = item_box.children[0]
    let _quotes_children = _quotes.children
    _quotes_children[0].innerHTML = testimonials[slide].testimony
    _quotes_children[1].innerHTML = "<strong>" + testimonials[slide].name + "<strong>"
    _quotes_children[2].innerHTML = testimonials[slide].role
    let photo = item_box.children[1]
    photo.style.backgroundImage = testimonials[slide].photo
}

