// function toggleBookModal() {

//     var modalBtn = document.querySelector('.login-box');
//     alert('')
//     modalBtn.style.opacity = 1;
//     modalBtn.style.visibility = 'visible';
// }

// toggleBookModal();

// var bookId = document.getElementById('book');
// var modalBtn = document.querySelector('.login-box');
// bookId.addEventListener('click', function (){
//     modalBtn.style.opacity = 1;
//     modalBtn.style.visibility = 'visible';
//     modalBtn.style.display = 'block';
// })

// var cancleBookModal = document.getElementById('cancleBTn')

// cancleBookModal.addEventListener('click', function (){
//     modalBtn.style.opacity = 0;
//     modalBtn.style.visibility = 'hidden';
//     modalBtn.style.display = 'none';
// })


// function handleRegister() {

//     var registerBtn = document.querySelector('#register-with-us');
//     var closeBtn = document.querySelector('#close');
//     var modalBtn = document.querySelector('.form');


//     modalBtn.style.opacity = 1;
//     modalBtn.style.visibility = 'visible';
// }


// handleRegister();

// function cancleModal(){
//     var modalBtn = document.querySelector('.form');
//     modalBtn.style.opacity = 0;
//     modalBtn.style.visibility = 'hidden';
// }
// cancleModal();

function displayValue() {
    let displayValue = document.querySelectorAll('.item-stats-count');
    let interval = 5000;

    console.log(displayValue)
    displayValue.forEach(value => {
        let start = 0;
        let end = parseInt(value.getAttribute("data-val"));

        let duration = Math.floor(interval / end);

        let counter = setInterval(function () {

            start += 1;
            value.textContent = start;

            if (start == end) {
                clearInterval(counter);
            }
        }, duration);

    })

}
displayValue();

window.addEventListener('scroll', show);

function show() {

    var showData = document.querySelectorAll('.show');

    for (var i = 0; i < showData.length; i++) {

        var windowHeight = window.innerHeight;
        var showTop = showData[i].getBoundingClientRect().top;
        var showPoint = 100;

        if (showTop < windowHeight - showPoint) {


            showData[i].classList.add('active');

        } else {
            showData[i].classList.remove('active');
        }
    }
}

function moveBackgroundImage() {

    var parallax = document.querySelector('.home-wrapper');

    window.addEventListener('scroll', function () {

        var offSet = window.pageYOffset;
        parallax.style.backgroundPositionY = -(offSet * 0.01) + 'px';
    })
}
moveBackgroundImage();



window.onscroll = function () {
    var getUl = document.getElementById('menuList');
    var nav = document.getElementById('nav');

    if (window.pageYOffset > 450) {
        nav.style.backgroundColor = '#000000';
        getUl.style.background = '#000000';
    } else {
        nav.style.backgroundColor = 'transparent';
        getUl.style.backgroundColor = 'transparent';
        getUl.style.boxShadow = 'none';
        nav.style.boxShadow = 'none';
    }
}


var addActiveLink = function () {

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            li.classList.remove("active-link");
            if (li.classList.contains(current)) {
                // var lin = document.getElementById('scroll-link');
                li.classList.add("active-link");
                // lin.style.background = "#fff";
                // lin.style.height = "3px";
                // lin.style.left = "0";
                // lin.style.bottom = "-7px";
                // lin.style.transition = "0.3s";
                // lin.style.width = "10px";
            }
        });
    });
}

addActiveLink();

function loader() {

    var loader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        loader.style.display = "none";
    })
}
loader();


function smoothScroll() {

    document.querySelectorAll("a[href^='#']").forEach(ancor => {

        ancor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        })

    })
}
smoothScroll();

function swipe() {

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })
}
swipe();