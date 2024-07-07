import React from 'react';
import HeroSection from './Components/HeroSection';
import Registration from './Components/Registration';
import RetroButton from './Components/RetroButton';
import TypewriterText from './Components/TypewriterText';

const App = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
        
      </div>


      {/* Main Content */}
      <div className=" content w-full px-4 lg:px-8 py-8 lg:py-16 max-w-screen-xl mx-auto">
        <TypewriterText speed={20} className="text-center text-sm lg:text-xl" text="As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus,
          tackling quests in locations like Nirvana, G-Block, and CSED. 
          <br/><br/>
          Team up to solve puzzles and battle strategically, strengthening your team to unlock new
          areas. Complete your tasks, overcome obstacles, and ultimately, leave the campus to save
          your own life."/>
        <div className="flex flex-col items-center mt-8 lg:mt-12">
          <p className="text-center text-sm lg:text-xl mb-5 mt-10">WANT TO TRY THE GAME?</p>
          <RetroButton text="DEMO" />
        </div>
      </div>

      {/* Registration Section */}
      <div className="w-30px" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Registration />
      </div>
    </div>
    </>
  );
};

export default App;
