/*=========================================
        PORTFOLIO JAVASCRIPT
=========================================*/

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }
    else{

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});


// ================================
// CLOSE MENU AFTER CLICK
// ================================

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});


// ================================
// STICKY NAVBAR
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,.95)";

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.35)";

    }

    else{

        header.style.background =
        "rgba(15,23,42,.75)";

        header.style.boxShadow = "none";

    }

});


// ================================
// ACTIVE MENU
// ================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")
        === "#" + current){

            link.classList.add("active");

        }

    });

});


// ================================
// SMOOTH SCROLL
// ================================

navItems.forEach(anchor=>{

    anchor.addEventListener("click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ================================
// BACK TO TOP
// ================================

const backBtn =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        backBtn.classList.add("show");

    }

    else{

        backBtn.classList.remove("show");

    }

});

backBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// CURRENT YEAR
// ================================

const footer =
document.querySelector("footer p");

if(footer){

    footer.innerHTML =

    "© " +

    new Date().getFullYear() +

    " All Rights Reserved | Designed by Anju Maurya";

}

console.log("Portfolio Loaded Successfully 🚀");



/*=========================================
        PART 3.2
        SCROLL ANIMATION + TYPING EFFECT
=========================================*/


// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =====================================
// HERO TYPING EFFECT
// =====================================

const typingElement = document.querySelector(".hero-text h2");

const professions = [

    "ASP.NET Developer",

    "Full Stack Developer",

    "Frontend Developer",

    "Backend Developer",

    "C# Developer",

    "Web Developer"

];

let professionIndex = 0;

let letterIndex = 0;

let isDeleting = false;

function typeEffect(){

    if(!typingElement) return;

    const currentText = professions[professionIndex];

    if(isDeleting){

        typingElement.textContent =
        currentText.substring(0, letterIndex--);

    }
    else{

        typingElement.textContent =
        currentText.substring(0, letterIndex++);

    }

    let typingSpeed = isDeleting ? 70 : 120;

    if(!isDeleting && letterIndex === currentText.length){

        typingSpeed = 1800;

        isDeleting = true;

    }

    if(isDeleting && letterIndex === 0){

        isDeleting = false;

        professionIndex++;

        if(professionIndex >= professions.length){

            professionIndex = 0;

        }

    }

    setTimeout(typeEffect, typingSpeed);

}

typeEffect();


// =====================================
// IMAGE HOVER TILT
// =====================================

const profileImage =
document.querySelector(".hero-image img");

if(profileImage){

    profileImage.addEventListener("mousemove",(e)=>{

        const rect = profileImage.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height/2)/18;

        const rotateY = (rect.width/2 - x)/18;

        profileImage.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.05)`;

    });

    profileImage.addEventListener("mouseleave",()=>{

        profileImage.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

}


// =====================================
// PROJECT CARD HOVER EFFECT
// =====================================

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// =====================================
// BUTTON RIPPLE EFFECT
// =====================================

const buttons =
document.querySelectorAll(".btn, .project-btn a");

buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const circle =
        document.createElement("span");

        const size =
        Math.max(button.clientWidth,button.clientHeight);

        circle.style.width=size+"px";
        circle.style.height=size+"px";

        circle.style.position="absolute";
        circle.style.borderRadius="50%";
        circle.style.background="rgba(255,255,255,.4)";
        circle.style.transform="scale(0)";
        circle.style.left=
        e.offsetX-size/2+"px";
        circle.style.top=
        e.offsetY-size/2+"px";
        circle.style.pointerEvents="none";
        circle.style.animation=
        "ripple .6s linear";

        button.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});


// =====================================
// PAGE LOADED
// =====================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    console.log("Animations Loaded Successfully 🚀");

});



/*=========================================
      PART 3.3A
      DARK MODE + FORM VALIDATION
=========================================*/

// ===============================
// DARK MODE TOGGLE
// ===============================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        if (isLight) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    });

}


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            form.querySelector('input[type="text"]');

        const email =
            form.querySelector('input[type="email"]');

        const message =
            form.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            showToast(
                "Please fill all fields.",
                "error"
            );

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            showToast(
                "Please enter a valid email.",
                "error"
            );

            return;

        }

        showToast(
            "Message sent successfully!",
            "success"
        );

        form.reset();

    });

}


// ===============================
// TOAST NOTIFICATION
// ===============================

function showToast(message, type) {

    let toast =
        document.createElement("div");

    toast.className =
        "toast " + type;

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}






/*=========================================
      PART 3.3B
      FINAL JAVASCRIPT
=========================================*/


// ================================
// SCROLL PROGRESS BAR
// ================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (winScroll / height) * 100;

    progressBar.style.width = progress + "%";

});



// ================================
// SKILL COUNTER
// ================================

const counters = document.querySelectorAll(".counter");

const speed = 40;

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            Number(counter.getAttribute("data-target"));

        let count = 0;

        const update = () => {

            const increment =
                Math.ceil(target / speed);

            if (count < target) {

                count += increment;

                counter.innerText = count;

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "%";

            }

        };

        update();

    });

};


// ================================
// START COUNTER WHEN VISIBLE
// ================================

const skillSection =
document.querySelector("#skills");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!skillSection || counterStarted) return;

    const top =
        skillSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        startCounter();

    }

});



// ================================
// PRELOADER
// ================================

const loader =
document.querySelector(".loader");

window.addEventListener("load", () => {

    if (loader) {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});



// ================================
// COPY EMAIL
// ================================

const emailCard =
document.querySelector(".copy-email");

if (emailCard) {

    emailCard.addEventListener("click", () => {

        navigator.clipboard.writeText(
            "yourmail@gmail.com"
        );

        showToast(
            "Email copied successfully!",
            "success"
        );

    });

}



// ================================
// LAZY IMAGE LOADING
// ================================

const images =
document.querySelectorAll("img");

images.forEach(img => {

    img.loading = "lazy";

});



// ================================
// CONSOLE MESSAGE
// ================================

console.log(
"%cPortfolio Developed by Anju Maurya 🚀",
"color:#3b82f6;font-size:18px;font-weight:bold;"
);

console.log(
"%cThanks for visiting.",
"color:lime;font-size:14px;"
);



// ================================
// FINISHED
// ================================

console.log("Portfolio Ready ✅");