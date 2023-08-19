const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const phone = document.querySelector(".phone")
const smart = document.querySelector(".smart")
const stylee = document.querySelector(".stylee")
const search = document.querySelector(".search")
const header = document.querySelector("header")
const iuser = document.querySelector(".header_item1 .fa-user")
const homeuser = document.querySelector(".login_home")

a1.addEventListener("mouseenter", () => {
    phone.style.top = "60px"
})

phone.addEventListener("mouseleave", () => {
    phone.style.top = "-140px"
})
a2.addEventListener("mouseenter", () => {
    smart.style.top = "60px"
})

smart.addEventListener("mouseleave", () => {
    smart.style.top = "-140px"
})
a3.addEventListener("mouseenter", () => {
    stylee.style.top = "60px"
})

stylee.addEventListener("mouseleave", () => {
    stylee.style.top = "-140px"
})

iuser.addEventListener("mouseenter", () => {
    homeuser.style.top = "60px"
})

homeuser.addEventListener("mouseleave", () => {
    homeuser.style.top = "-140px"
})



function search1() {
    search.style.display = "flex"
    header.style.display = "none"
}

function searchDelete() {
    search.style.display = "none"
    header.style.display = "flex"
}

const carouselData = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png",
        h1: "Black and White in Portrait Photographer",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam deleniti molestiae iste quo odio? Placeat, quidem! Saepe, ratione obcaecati",
        b: "Learn more >"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png",
        h1: "Black and White in street Photographer",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam deleniti molestiae iste quo odio? Placeat, quidem! Saepe, ratione obcaecati",
        b: "Learn more >"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png",
        h1: "Black and White in Potography Photographer",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam deleniti molestiae iste quo odio? Placeat, quidem! Saepe, ratione obcaecati",
        b: "Learn more >"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png",
        h1: "Black and White in Portrait Photographer",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam deleniti molestiae iste quo odio? Placeat, quidem! Saepe, ratione obcaecati",
        b: "Learn more >"

    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png",
        h1: "Black and White in Portrait Photographer",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam deleniti molestiae iste quo odio? Placeat, quidem! Saepe, ratione obcaecati",
        b: "Learn more >"

    }
]
const right = document.querySelector('.fa-chevron-right')
const left = document.querySelector('.fa-chevron-left')
const img = document.querySelector('.carousel_item img')
const h1 = document.querySelector('.carousel_item h1')
const p = document.querySelector('.carousel_item p')
const b = document.querySelector(".carousel_item b")

index = 0

img.src = carouselData[index].img;
h1.innerHTML = carouselData[index].h1
p.innerHTML = carouselData[index].p
b.innerHTML = carouselData[index].b

right.addEventListener('click', () => {
    if (index === carouselData.length - 1) {
        index = -1
    }
    index++
    img.src = carouselData[index].img; h1.innerHTML = carouselData[index].h1
    p.innerHTML = carouselData[index].p
    b.innerHTML = carouselData[index].b

})

left.addEventListener('click', () => {
    if (index === 0) {
        index = carouselData.length
    }
    index--
    img.src = carouselData[index].img;
    h1.innerHTML = carouselData[index].h1
    p.innerHTML = carouselData[index].p
    b.innerHTML = carouselData[index].b

})
setInterval(() => {
    if (index === carouselData.length - 1) {
        index = - 1
    } index++
    img.src = carouselData[index].img;
    h1.innerHTML = carouselData[index].h1
    p.innerHTML = carouselData[index].p
    b.innerHTML = carouselData[index].b

}, 5000)

const homel = document.querySelector(".home_login")
const clear1 = document.querySelector("#dar")
const crsl = document.querySelector('.carousel')
const signinlogin = document.querySelector("#signinlogin")
const signuplogin = document.querySelector("#signuplogin")
const sign_in = document.querySelector(".sign_in")
const sign_up = document.querySelector(".sign_up")
const wrapper = document.querySelector(".wrapper")
const noneb = document.querySelector("#noneb")
const nonebb = document.querySelector("#nonebb")
const imgnone = document.querySelector("#imgnone")
const imgnonee = document.querySelector("#imgnonee")


signinlogin.addEventListener("click", () => {
    sign_in.style.display = "flex"
    wrapper.style.display = "none"
    sign_up.style.display = "none"

})

signuplogin.addEventListener("click", () => {
    sign_up.style.display = "flex"
    wrapper.style.display = "none"
    sign_in.style.display = "none"

})

noneb.addEventListener("click", () => {
    sign_up.style.display = "none"
    wrapper.style.display = "none"
    sign_in.style.display = "flex"
})

nonebb.addEventListener("click", () => {
    sign_up.style.display = "flex"
    wrapper.style.display = "none"
    sign_in.style.display = "none"
})

imgnone.addEventListener("click", () => {
    sign_up.style.display = "none"
    wrapper.style.display = "block"
    sign_in.style.display = "none"
})

imgnonee.addEventListener("click", () => {
    sign_up.style.display = "none"
    wrapper.style.display = "block"
    sign_in.style.display = "none"
})
const email = document.querySelector("#email1")
const password = document.querySelector("#password1")
const getemail = document.querySelector("#getva")
const getpass = document.querySelector("#getpas")
const sign_in_box_img = document.querySelector("#sign_in_box_img")
const img_box_item = document.querySelector(".img_box_item")
const sign_in_box_img1 = document.querySelector("#sign_in_box_img1")
const img_box_item1 = document.querySelector(".img_box_item1")

sign_in_box_img.addEventListener("mouseenter", () => {
    img_box_item.style.right = "80px"

})

sign_in_box_img.addEventListener("mouseleave", () => {
    img_box_item.style.right = "-100px"
})

sign_in_box_img1.addEventListener("mouseenter", () => {
    img_box_item1.style.right = "80px"

})

sign_in_box_img1.addEventListener("mouseleave", () => {
    img_box_item1.style.right = "-100px"
})





function login22() {
    localStorage.setItem("email", getemail.value)
    localStorage.setItem("password", getpass.value)
    sign_up.style.display = "none"
    wrapper.style.display = "block"
    sign_in.style.display = "none"
    window.location.reload()

}

let logineEmail = localStorage.getItem("email")
let loginePassword = localStorage.getItem("password")

function login1() {

    if (email.value == logineEmail && password.value == loginePassword) {
        sign_up.style.display = "none"
        wrapper.style.display = "block"
        sign_in.style.display = "none"
        localStorage.clear()
    }
    else {
        alert("Kod noto'g'ri")
    }

}

const childern_item = document.querySelector(".select_children")
const select = document.querySelector(".select")
function showSelect() {
    childern_item.style.display = "flex"
}


select.addEventListener("dblclick", () => {
    childern_item.style.display = "none"
})

