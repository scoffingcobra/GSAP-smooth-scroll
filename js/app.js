const parallax_el = document.querySelectorAll(".parallax");

Array.from(parallax_el);


// let xValue = 0, yValue = 0;
// let rotateDegree = 0;

// // window.addEventListener("mousemove", (e)=>{
// //     xValue = e.clientX - window.innerWidth / 2;
// //     yValue = e.clientY - window.innerHeight / 2;

// //     rotateDegree = (xValue / (window.innerWidth / 2)) * 20;


// //     parallax_el.forEach((el) => {
// //         let isInLeft = parserFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1: -1;
// //     let zValue = (e.clientX - parserFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
// //         let speedx = el.dataset.speedx;
// //         el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(-50% + ${-yValue}px)) perspective(2300px) translateZ(${zValue}px))`;
// //     })
// // })

// window.addEventListener("mousemove", (e)=>{
//     console.log(e.clientX-window.innerWidth/2, e.clientY-window.innerHeight/2);
// })

let timeline = gsap.timeline();

timeline.from(".bg-img", {
    top: `${+document.querySelector(".bg-img").offsetHeight/2-200}px`,
    duration: 0.5,
    ease: "power3.out"
}).from(".text h1", {
    y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top-200,
    duration: 2,
}, "1")

timeline.from(".text h2", {
    y: 150 - document.querySelector(".text h2").getBoundingClientRect().bottom,
    opacity: 0,
    duration: 1.5,
}, "3").from(".hide", {
    opacity: 0,
    duration: 1.5,
}, "3")