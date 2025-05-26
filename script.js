window.onbeforeunload = function () {
  window.scrollTo(0, 0); // ensures scroll to top
};
 function LocomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

 }
function loaderAinmation(){
   let tl = gsap.timeline(); 
tl.from(".line h1",{
    y:180,
    duration:0.6,
    stagger:0.1
})
tl.from("#loader h4",{
    opacity:0,
    duration:0.2,
    stagger:0.2
})
  tl.from("#line-count",{
    opacity:0,
    onStart:function(){
       let h5 = document.querySelector("#line-count h5");
let grow = 0;
setInterval(function(){
    if(grow<100){
    h5.innerHTML = grow++;
     }else{
        h5.innerHTML = grow;
     }
},20);
    }
})
tl.to(".line h2",{
    animationName:"animate",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2,
})
tl.from("#page1",{
    y:1000,
    opacity:0,
    duration:1.8,
    delay:0.1,
    ease:Power4.easeInOut,
   
})
tl.to("#loader",{
    display:"none"
})
gsap.from("#nav,.superhero",{
    opacity:0,
    delay:5.58,

})
gsap.from("#nav #nav-2,.superhero h6",{
    opacity:1,
     delay:5.65
})
gsap.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
    y:107,
    stagger:0.2,
     delay:5.65,
})

}
function cursorAnim(){
    document.addEventListener("mousemove", function(de) {
        gsap.to("#crsr", {
            left: de.clientX,
            top: de.clientY,
            // transform: "translate(-50%,-50%)",
        });
    });

    // Add this to enable Shery's cursor
    Shery.mouseFollower();

    Shery.makeMagnet("#nav #nav-2 h2,#menu,#page2 .play", {});



}

LocomotiveAnimation();

// cursorAnim();
loaderAinmation();

