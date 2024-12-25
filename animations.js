// GSAP and ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger);

// Landing Section Animations
gsap.from("#landing .landing-title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
});

gsap.from("#landing .landing-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
});

gsap.from(".about-paragraph", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
    ease: "power2.out",
});

gsap.from("#dynamic-role", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1.2,
    ease: "back.out(1.5)",
});

// Skills Section Animations
gsap.from("#skills .skills-title", {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
    },
});

gsap.from(".skills-category", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#skills",
        start: "top 70%",
    },
});

// Education Section Animations
gsap.from("#education .degree-title", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: "#education",
        start: "top 80%",
    },
});

gsap.from("#education .coursework-list li", {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#education",
        start: "top 70%",
    },
});

// Portfolio Section Animations
gsap.from("#portfolio .portfolio-grid", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
    },
});

gsap.from(".portfolio-item", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 90%",
    },
});

// Contact Section Animations
gsap.from("#contact h2", {
    opacity: 0,
    y: -30,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
    },
});

gsap.from("#contact form", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
    },
});

// Footer Animations
gsap.from("footer", {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
    },
});

gsap.from("#blog .blog-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#blog",
        start: "top 90%",
    },
});
