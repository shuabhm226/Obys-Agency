window.onbeforeunload = function () {
  window.scrollTo(0, 0); // ensures scroll to top
};
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
    staager:0.2
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
    delay:5.65,

})
gsap.from("#nav #nav-2,.superhero h6",{
    opacity:1,
     delay:5.65
})
// gsap.to("#nav #nav-2,.superhero h6",{
//     opacity:0,
//      delay:0.1,
//      duration:"0.5",
//      scrollTrigger:{
//         trigger:"#nav #nav-2",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 10%",
//         scrub:2,
//      }
// })
gsap.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
    y:107,
    stagger:0.2,
     delay:5.65,
})

}
function cursorAnim(){
    document.addEventListener("mousemove",function(de){
       gsap.to("#crsr",{
       left:de.clientX,
        top:de.clientY,
        transform:"translate(-50%,-50%)",
       }) 
    }
)

Shery.makeMagnet("#nav #nav-2 h2,#menu,#page2 .play",{
  
});

}



cursorAnim();
loaderAinmation();

