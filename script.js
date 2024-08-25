var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  (crsr.style.left = dets.x +30+ "px"),
    (crsr.style.top = dets.y + "px"),
    (blur.style.left = dets.x - 250 + "px"),
    (blur.style.top = dets.y - 250 + "px");
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "13.82vh",

  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
  delay: 1,
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

var navall = document.querySelectorAll("#nav a");

navall.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
/* In forEach, you iterate over the values of the array, 
but you can also get the index if you explicitly specify
 it as a parameter in the callback function.*/


 gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3,
  }
 })


 gsap.from(".card",{
  scale:0.8,
  opacity:1,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 55%",
    scrub:1,
  }
 })

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 45%",
    scrub:4,
}})

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 80%",
    scrub: 3,
  },
});


// ----------------------------------------------------------------------------------------For progress button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 0) {
      scrollProgress.style.display = "grid";
  } else {
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);
