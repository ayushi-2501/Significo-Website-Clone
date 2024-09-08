
function homePageAnimation(){
    gsap.set(".slidesm",{scale: 3})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
})

tl
.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2
},'a')
.to(".slidesm",{
    scale: 1,
    ease: Power2
},'a') 
.to(".lft",{
    xPercent: -10,
    stagger: .03,
    ease: Power4
},'b') 
.to(".rgt",{
    xPercent: 10,
    stagger: .03,
    ease: Power4
},'b') 

}

function realPageAnimation(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 7
        },
        xPercent: -200,
        ease: Power4
    });
}

function teamAnimation(){
        document.querySelectorAll(".listelem").forEach(function(el) {
            el.addEventListener("mousemove", function(dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: "none", 
                    duration: 0.1, 
                    overwrite: "auto"
                });
    
                
                gsap.to(this.querySelector(".bluelayer"), {
                    height: "100%",
                    ease: "none",
                    duration: 0.1,
                    overwrite: "auto"
                });
            });
    
            el.addEventListener("mouseleave", function() {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                    ease: "none",
                    duration: 0.1,
                    overwrite: "auto"
                });
    
                gsap.to(this.querySelector(".bluelayer"), {
                    height: "0%",
                    ease: "none",
                    duration: 0.1,
                    overwrite: "auto"
                });
            });
        });
    
    
}
    
function paraAnimation(){
    var clutter = "";
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function(e){
        if(e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })

    document.querySelector(".textpara").innerHTML = clutter;

    gsap.set(".textpara span", {opacity: .1})
    gsap.to(".textpara span",{
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    }) 
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub:1
        },
        y:0,
        ease: Power4
    })   
}

function bodyColorChange(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}

function cardColorChange() {
    document.querySelectorAll(".box1").forEach(function(card) {
        ScrollTrigger.create({
            trigger: card,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: function() {
                card.style.backgroundColor = "black"; 
                card.style.color = "#AEDEE0"; 
                card.style.transform = "scale(1.1)"; 
                card.style.transition = "all 0.5s ease";
            },
            onEnterBack: function() {
                card.style.backgroundColor = "black"; 
                card.style.color = "#AEDEE0"; 
                card.style.transform = "scale(1.1)";
                card.style.transition = "all 0.5s ease";
            },
            onLeave: function() {
                card.style.backgroundColor = card.dataset.originalColor; 
                card.style.color = card.dataset.originalTextColor;
                card.style.transform = "scale(1)"; 
            },
            onLeaveBack: function() {
                card.style.backgroundColor = card.dataset.originalColor; 
                card.style.color = card.dataset.originalTextColor; 
                card.style.transform = "scale(1)"; 
            }
        });
    });
}

document.querySelectorAll(".box1").forEach(function(card) {
    card.dataset.originalColor = card.style.backgroundColor;
    card.dataset.originalTextColor = card.style.color || "black"; 
});



homePageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
loco();
capsuleAnimation();
bodyColorChange();
cardColorChange();