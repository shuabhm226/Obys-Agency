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
},18.8);
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
gsap.from("#nav #nav-2,.superhero h6,#page2 .play",{
    opacity:1,
     delay:5.65
})
gsap.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
    y:107,
    stagger:0.2,
     delay:5.65,
})
tl.from("#page2",{
    opacity:0,
    delay:1,
    duration:2
},"-=1.2")

gsap.from(".underline", {
  width: "1vw",
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".underline",
    scroller: "#main", // remove if not using a custom scroll container
    start: "top 80%",
    end: "top 20%",
    // scrub: true,
    // markers: true
  }
});
gsap.from(" #page4 .underline-2",{
  width: "1vw",
  duration: 2.8,
  // delay:0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".underline-2",
    scroller: "#main", // remove if not using a custom scroll container
    start: "top 70%",
    end: "top 10%",
    // scrub: true,
    // markers: true
  }
});
gsap.from("#page6 .underline-2", {
  width: "1vw",
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page6 ",
    scroller: "#main", // remove if not using a custom scroll container
    start: "top 90%",
    end: "top 40%",
    // markers: true
  }
});
 
 gsap.from("#page4-cont h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    //  delay:1.65,
    duration:1,
     ease: "power2.out",
  scrollTrigger: {
    trigger: "#page4-cont",
    scroller: "#main", // remove if not using a custom scroll container
    start: "top 90%",
    end: "top 40%",
    // markers: true
  }
  })
  gsap.from("#page3-cont h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    //  delay:1.65,
    duration:1,
     ease: "power2.out",
  scrollTrigger: {
    trigger: "#page3-cont ",
    scroller: "#main", // remove if not using a custom scroll container
    start: "top 90%",
    end: "top 40%",
    // markers: true
  }
  })
  gsap.from("#page6 #page6-cont h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    //  delay:1.65,
    duration:1,
     ease: "power2.out",
  scrollTrigger: {
    trigger: "#page6 #page6-cont",
    scroller: "#main", // remove if not using a custom scroll container
    start: "top 90%",
    end: "top 40%",
    // markers: true
  }
  })

}
function cursorAnim(){
    Shery.mouseFollower({
    skew: true,
    duration: 1,
    opacity:0,

  });
    Shery.makeMagnet("#nav #nav-2 h2,#menu");

    var vidcont = document.querySelector("#cont-vid");
    var vid = document.querySelector("#cont-vid video");
    vidcont.addEventListener("mouseenter",function(){
      vidcont.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
          opacity:0
        })
         gsap.to(".vid-cursor",{
          left:dets.x - 560,
          y:dets.y - 200,
         })
      })
    })
    vidcont.addEventListener("mouseleave",function(){
      gsap.to(".mousefollower",{
        opacity:1
      })
      gsap.to(".vid-cursor",{
        left:"67%",
        top:"-15%"
      })
      vid.pause();
      vid.style.opacity="0";
      document.querySelector(".vid-cursor").innerHTML=`<i class="ri-play-large-fill"></i>`
      gsap.to(".vid-cursor",{
        scale:1})
    })
    var flag=0;
    vidcont.addEventListener("click",function(){
      if(flag==0){
      vid.play();
      vid.style.opacity = "1";
      document.querySelector(".vid-cursor").innerHTML=`<i class="ri-pause-large-fill"></i>`
      gsap.to(".vid-cursor",{
        scale:0.5
      })
    flag =1;
    }else{
      vid.pause();
      vid.style.opacity="0";
      document.querySelector(".vid-cursor").innerHTML=`<i class="ri-play-large-fill"></i>`
      gsap.to(".vid-cursor",{
        scale:1
      })
      flag=0
    }
      
    })
    
}
function sheryAnimation(){
    Shery.imageEffect(".img-div",{
        style:5,
        config:{"a":{"value":2.06,"range":[0,30]},"b":{"value":0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7986096906349526},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.15,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}},
        gooey:true
    })
}
function flagffect(){
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0
  })
})
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x:dets.x,
      y:dets.y,
      transform:"translate(-50%,-50%)"
    })
})
}
sheryAnimation();
flagffect();
cursorAnim();
LocomotiveAnimation();
loaderAinmation();
