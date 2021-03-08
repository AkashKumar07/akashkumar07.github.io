gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);

tl.from(
  ".hero-design",
  {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 1,
  },
  "-=2"
);

gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.from(".skills__display-container", {
  scrollTrigger: {
    trigger: ".skills__display-container",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 400,
  ease: Power4.easeOut,
  duration: 1,
});

gsap.from(".aboutMe__display-image", {
  scrollTrigger: {
    trigger: ".aboutMe__Main",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: -100,
  ease: Power4.easeOut,
  duration: 1,
});

gsap.from(".aboutMe__display-description", {
  scrollTrigger: {
    trigger: ".aboutMe__Main",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 100,
  ease: Power4.easeOut,
  duration: 1,
});

gsap.from(".work__card", {
  scrollTrigger: {
    trigger: ".work__card",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  y: 200,
  ease: Power4.easeOut,
  duration: 1,
});

gsap.from(
  ".stagger3",
  {
    scrollTrigger: {
      trigger: ".hireme",
      toggleActions: "restart none none none",
    },
    opacity: 0,
    y: -50,
    stagger: 0.2,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);
