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

gsap.from(".stagger2", {
  scrollTrigger: ".skills__display-container",
  opacity: 0,
  x: 100,
  stagger: 0.2,
  ease: Power4.easeOut,
  duration: 2,
});

gsap.from(".aboutMe__display-image", {
  scrollTrigger: ".aboutMe__main",
  opacity: 0,
  x: -100,
  ease: Power4.easeOut,
  duration: 2,
});

gsap.from(".aboutMe__display-description", {
  scrollTrigger: ".aboutMe__main",
  opacity: 0,
  x: 100,
  ease: Power4.easeOut,
  duration: 2,
});
