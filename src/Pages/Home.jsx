
// import HeroSection from '../Components/HeroSection';
// import Registration from '../Components/Registration';
// import RetroButton from '../Components/RetroButton';
// import TypewriterText from '../Components/TypewriterText';



// export default function Home(){
//     return(
//         <div className="min-h-screen flex flex-col justify-center items-center">
//       {/* Hero Section */}
//       <div className="w-full">
//         <HeroSection />
        
//       </div>


//       {/* Main Content */}
//       <div className=" content w-full px-4 lg:px-8 py-8 lg:py-16 max-w-screen-xl mx-auto">
//         <TypewriterText speed={20} className="text-center text-sm lg:text-xl" text="As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus,
//           tackling quests in locations like Nirvana, G-Block, and CSED. 
//           <br/><br/>
//           Team up to solve puzzles and battle strategically, strengthening your team to unlock new
//           areas. Complete your tasks, overcome obstacles, and ultimately, leave the campus to save
//           your own life."/>
//         <div className="flex flex-col items-center mt-8 lg:mt-12">
//           <p className="text-center text-sm lg:text-xl mb-5 mt-10">WANT TO TRY THE GAME?</p>
//           <RetroButton text="DEMO" />
//         </div>
//       </div>

//       {/* Registration Section */}
//       <div className="w-30px" style={{height:'60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Registration />
//       </div>
//     </div>
//     )
    
// }
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import HeroSection from '../Components/HeroSection';
// import Registration from '../Components/Registration';
// import RetroButton from '../Components/RetroButton';
// import TypewriterText from '../Components/TypewriterText';
// import './crt.css';

// export default function Home() {
//   const crtScreenRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const crtScreen = crtScreenRef.current;
//     const content = contentRef.current;

//     gsap.set(content, { opacity: 0 });

//     gsap.timeline()
//       .to(crtScreen, { duration: 0.1, opacity: 1, ease: 'power2.in' })
//       .add(() => {
//         crtScreen.classList.add('turn-on');
//       })
//       .to(content, { duration: 2, opacity: 1, delay: 2, ease: 'power2.inOut' });

//   }, []);

//   return (
//     <div className="crt-screen min-h-screen flex flex-col justify-center items-center" ref={crtScreenRef}>
//       <div className="crt-content w-full" ref={contentRef}>
//         {/* Hero Section */}
//         <div className="w-full">
//           <HeroSection />
//         </div>
//         {/* Main Content */}
//         <div className="content w-full px-4 lg:px-8 py-8 lg:py-16 max-w-screen-xl mx-auto">
//           <TypewriterText 
//             speed={20} 
//             className="text-center text-sm lg:text-xl" 
//             text="As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus,
//              tackling quests in locations like Nirvana, G-Block, and CSED.
//              <br/><br/>
//              Team up to solve puzzles and battle strategically, strengthening your team to unlock new
//              areas. Complete your tasks, overcome obstacles, and ultimately, leave the campus to save
//              your own life."
//           />
//           <div className="flex flex-col items-center mt-8 lg:mt-12">
//             <p className="text-center text-sm lg:text-xl mb-5 mt-10">WANT TO TRY THE GAME?</p>
//             <RetroButton text="DEMO" />
//           </div>
//         </div>
//         {/* Registration Section */}
//         <div className="w-30px" style={{height:'60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <Registration />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroSection from '../Components/HeroSection';
import Registration from '../Components/Registration';
import RetroButton from '../Components/RetroButton';
import TypewriterText from '../Components/TypewriterText';
import './crt.css';

export default function Home() {
  const crtScreenRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const crtScreen = crtScreenRef.current;
    const content = contentRef.current;

    gsap.set(content, { opacity: 0 });

    gsap.timeline()
      .to(crtScreen, { duration: 0.1, opacity: 1, ease: 'power2.in' })
      .add(() => {
        crtScreen.classList.add('turn-on');
      })
      .to(content, { duration: 2, opacity: 1, delay: 2, ease: 'power2.inOut' });

    // Add random flickering effect
    const elements = document.querySelectorAll('.random-flicker');
    elements.forEach(el => {
      el.style.setProperty('--delay', Math.random() * 10);
    });

  }, []);

  return (
    <div className="crt-screen min-h-screen flex flex-col justify-center items-center" ref={crtScreenRef}>
      <div className="crt-content w-full" ref={contentRef}>
        {/* Hero Section */}
        <div className="w-full random-flicker">
          <HeroSection />
        </div>
        {/* Main Content */}
        <div className="content w-full px-4 lg:px-8 py-8 lg:py-16 max-w-screen-xl mx-auto">
          <div className="glitch" data-text="As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus...">
            <TypewriterText 
              speed={20} 
              className="text-center text-sm lg:text-xl" 
              text="As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus,
               tackling quests in locations like Nirvana, G-Block, and CSED.
               <br/><br/>
               Team up to solve puzzles and battle strategically, strengthening your team to unlock new
               areas. Complete your tasks, overcome obstacles, and ultimately, leave the campus to save
               your own life."
            />
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-12 random-flicker">
            <p className="text-center text-sm lg:text-xl mb-5 mt-10">WANT TO TRY THE GAME?</p>
            <RetroButton text="DEMO" />
          </div>
        </div>
        {/* Registration Section */}
        <div className="w-30px random-flicker" style={{height:'60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Registration />
        </div>
      </div>
    </div>
  );
}