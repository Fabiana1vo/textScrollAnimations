
// Gsap
gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {
    const text = new SplitType(char, { types:'chars, words'}) 

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger:char,
            start:'top 80%',
            end:'top 20%',
            scrub:true,
            markers:false,
        },
        y:100,
        scaleY:0,
        transformOrigin: 'top',
        // opacity: 0,
        stagger:0.1,
        duration:1
    })
})


// Lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e); // { x: number, y: number }
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

