import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



// export const finalAnim = (elem1) => {
//     let tl1 = gsap.timeline();
//     tl1.to(elem1, {
//         scrollTrigger: {
//             trigger: elem1,
//             start: "700px 50%",
//             end: "+=300px 40%",
//             scrub: 0.5,
//             // markers: true,
//         },
//         duration: 300,
//         ease: "power2. out",
//         y: -69,
//     });
// }