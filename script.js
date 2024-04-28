gsap.registerPlugin(ScrollTrigger);

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

function watch(){
  gsap.to("#img1", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#home",
      start: "0% 0%",
      end: "110% 0%",
      scrub: 2,
    },
    x:-100,
    y:100,
    // opacity:0,
  
  })
  
  gsap.to("#img3", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#home",
      start: "0% 0%",
      end: "110% 0%",
      scrub: 2,
    },
    x:100,
    y:100,
    // opacity:0,
  
  })
  gsap.to("#img2", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#home",
      start: "0% 0%",
      end: "110% 0%",
      scrub: 2,
    },
    y:-100,
    // opacity:0,
  
  })
  
  gsap.to(".scroll", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#home",
      start: "0% 0%",
      end: "10% 0%",
      scrub: 2,
    },
    opacity:0
    // opacity:0,
  })
}

watch();

function mtext(){
  var h1=document.querySelector("#h1");
  var clutter="";
  var temp=0;
  for(var i=0;i<=Math.floor(h1.textContent.length/2);i++){
    clutter+=`<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }
  for(var i=Math.floor(h1.textContent.length/2)-1;i>=0;i--)
  {
    clutter+= `<span data-delay="${i}">${h1.textContent.charAt(temp)}</span>`;
    temp++;
  }

  document.querySelector("#h1").innerHTML=clutter;
  // document.querySelectorAll("#h1 span")
  // .forEach(function(elem){
  //   gsap.to(elem,{
  //     scrollTrigger: {
  //       scroller: "#main",
  //       trigger: "#home",
  //       start: "0% 0%",
  //       end: "110% 0%",
  //       markers:true,
  //       scrub: 2,
  //     },
  //     y:-100,
  //     // opacity:0,
  //      ease:Expo.easeInout,
  //      duration:.8,
  //      stagger:.1,
  //      stagger:elem.dataset.delay*.1
  //   })
  // }) 

  gsap.to("#h1 span", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#home",
      start: "0% 0%",
      end: "110% 0%",
      // markers:true,
      scrub: 2,
    },
    y:-100,
  //      
    stagger:.01,
    opacity:0,
  
  })
}

mtext();

function main_loader(){
     
const counterElement = document.querySelector('.counter');

function countTo100() {
  let count = 1;
  const interval = setInterval(() => {
    counterElement.textContent = count;
    count++;

    if (count > 100) {
      clearInterval(interval);
    }
  }, 25); // 100 milliseconds interval
}

countTo100();


const stars = document.querySelectorAll('.svg_container svg path');


gsap.set(stars, { opacity: 0, x: '-=100', y: '-=100', z: '-=100', rotation: '=360' });

const fsElement = document.querySelector('#fs');
gsap.set(fsElement, { height: '100vh', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 });


// Callback function to add bottom curve effect
function addBottomCurve() {
  fsElement.style.borderBottomLeftRadius = '50%';
  fsElement.style.borderBottomRightRadius = '50%';
}

var tl = gsap.timeline();
tl
.to(stars, {

  opacity: 1,
  x: '+=100',
  y: '+=100',
  z: '+=100',
  rotation: '-=360',
  duration: 1,
  stagger: 0.1, // Time delay between each star
  ease: Power1.easeInOut, // Easing function
})
.to(stars, {
    opacity: 0,
  })
  .to(".counter", {
    delay:-.5,
    opacity: 0,
  })
 .to(fsElement, {
    height: 0,
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    duration: .5,
    ease: Power1.easeInOut, // Easing function
  })
  .from("#home h1,#home h2",{
     opacity:0,
     scale:0,
    //  ease:Expo.easeInOut,
    ease: 'power1.out',
    duration:2,
  })
  .from("#img2",{
    delay:-1.9,
    y:500,
    opacity:0,
    z:0,
    // ease:Expo.easeInOut,
    ease: 'power1.out',
    duration:2,
  })
  .from("#img1,#img3",{
    delay:-1.5,
      y:500,
      opacity:0,
      // ease:Expo.easeInOut,
      ease: 'power1.out',
      duration:2,
  })
  .from("#nav svg,#nav i,#nav .r h1",{
    delay:-1,
    y:0,
    opacity:0,
    ease: 'power1.out',
    duration:2,
  })
  .from("#home .scroll",{
    delay:-1.9,
    opacity:0,
    y:100,
    ease:Expo.easeInOut,
    duration:2
  })

}

main_loader();

function nav() {
  var flag = 0;


  document.querySelector("#nav .menu")
  .addEventListener("click",function(){
    if(flag  === 0){
      document.querySelector("#nav .menu svg").style.display = "none"
      document.querySelector("#close").style.display = "initial";
      var tl = gsap.timeline();
      tl
      tl
      .to("#nav", {
       
        //    y:100,
        backgroundColor: "#fae7e3",
        borderBottom: "2px solid #bdb3b1",
        ease: Expo.easeInout,
        duration:1
      })
      .to("#nav_loader", {
        delay:-1,
        height: "100vh",
      })
        .to(" #nav_loader #images img", {
            delay: -0.5,
            width: "68vh",
            ease: Expo.easeInout,
            duration: 1,
        })
        .to("#nav_loader #links .containers h1", {
            delay: -1,
            y: 0,
            ease: Expo.easeInout,
            duration: 1,
        })
        flag = 1;
    }else{
      
      var tl = gsap.timeline();
      tl
      tl
        .to(" #nav_loader #images img", {
            width: "0vh",
            ease: Expo.easeInout,
            duration: 1,
        })
        .to("#nav_loader #links .containers h1", {
            delay: -1,
            y: 100,
            ease: Expo.easeInout,
            duration: 1,
        })
        .to("#nav_loader", {
          height: "0vh",
        })
        .to("#nav", {
       
          //    y:100,
          backgroundColor: "transparent",
          borderBottom: "none",
          ease: Expo.easeInout,
          duration:1
        })
       

          function greet() {
            document.querySelector("#close").style.display = "none";
            document.querySelector("#nav .menu svg").style.display = "initial"
          }

          setTimeout(greet, 1000);
        flag=0;
    }
   
  })


  document.querySelector("#one").addEventListener("mouseenter", function () {
      document.querySelector("#im1").style.opacity = 1;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
      document.querySelector("#im").style.opacity = 0;
  });
  document.querySelector("#one").addEventListener("mouseleave", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
      document.querySelector("#im").style.opacity = 1;
  });

  document.querySelector("#two").addEventListener("mouseenter", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 1;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
  });
  document.querySelector("#two").addEventListener("mouseleave", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
  });

  document.querySelector("#three").addEventListener("mouseenter", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 1;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
  });
  document.querySelector("#three").addEventListener("mouseleave", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
  });

  document.querySelector("#four").addEventListener("mouseenter", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 1;
      document.querySelector("#im5").style.opacity = 0;
  });
  document.querySelector("#four").addEventListener("mouseleave", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
  });

  document.querySelector("#five").addEventListener("mouseenter", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 1;
  });
  document.querySelector("#five").addEventListener("mouseleave", function () {
      document.querySelector("#im1").style.opacity = 0;
      document.querySelector("#im2").style.opacity = 0;
      document.querySelector("#im3").style.opacity = 0;
      document.querySelector("#im4").style.opacity = 0;
      document.querySelector("#im5").style.opacity = 0;
  });
}

nav();

function navScroll() {
  var tl = gsap.timeline();
  tl.to("#nav", {
    scrollTrigger: {
      trigger: ".container",
      scroller: "#main",
      start: "top 50%",
      end: "top 60%",
      scrub: true,
      scrub: 1,
    },
    //    y:100,
    backgroundColor: "#fae7e3",
    borderBottom: "2px solid #bdb3b1",
    ease: Expo.easeInout,
  })
    
}

navScroll();

function scrollTrigger(){
  gsap.to("#our ", {
    scrollTrigger: {
      trigger: ".h1",
      scroller: "#main",
      start: "top 90%",
    },
       y:0,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.from(".options", {
    scrollTrigger: {
      trigger: ".options",
      scroller: "#main",
      start: "top 90%",
    },
    opacity:0,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.to("#n", {
    scrollTrigger: {
      trigger: "#nd",
      scroller: "#main",
      start: "top 80%",
    },
       y:0,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.from(".s_watch", {
    scrollTrigger: {
      trigger: "#pg3 .watches",
      scroller: "#main",
      start: "top 10%",
    },
      opacity:0,
      stagger:.3,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.from("#imgg1", {
    scrollTrigger: {
      trigger: "#wfh",
      scroller: "#main",
      start: "top 2%",
    },
      opacity:0,
      x:-100,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.from(".wfh2 .watch", {
    scrollTrigger: {
      trigger: ".wfh2",
      scroller: "#main",
      start: "top 2%",
    },
      opacity:0,
      x:200,
      stagger:.1,
       ease:Expo.easeInOut,
       duration:2
  })
  
  
  gsap.from(".wfh1 .watch", {
    scrollTrigger: {
      trigger: ".wfh1",
      scroller: "#main",
      start: "top 2%",
    },
      opacity:0,
      x:-200,
      stagger:.1,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.from("#imgg2", {
    scrollTrigger: {
      trigger: ".wfh1",
      scroller: "#main",
      start: "top 2%",
    },
      opacity:0,
      x:200,
      stagger:.1,
       ease:Expo.easeInOut,
       duration:2
  })
    
  
  gsap.from("#pg4 .left,#pg4 .right", {
    scrollTrigger: {
      trigger: "#pg4",
      scroller: "#main",
      start: "top 2%",
    },
      opacity:0,
       ease:Expo.easeInOut,
       duration:2
  })
  
  gsap.from("#footer_left,#footer_right", {
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "top 40%",
    },
      opacity:0,
       ease:Expo.easeInOut,
       duration:2
  })
}
  
scrollTrigger();

// function isDesktopView() {
//   return window.matchMedia('(min-width: 768px)').matches && !window.matchMedia('(max-width: 1024px)').matches;
// }

// if (isDesktopView()) {
// }