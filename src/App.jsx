import React from 'react';
import HeroSection from './Components/HeroSection';
import Registration from './Components/Registration';
import RetroButton from './Components/RetroButton';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Main Content */}
      <div className=" content w-full px-4 lg:px-8 py-8 lg:py-16 max-w-screen-xl mx-auto">
        <p className="text-center text-sm lg:text-xl">
          As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus,
          tackling quests in locations like Nirvana, G-Block, and CSED.
        </p>
        <br />
        <p className="text-center text-sm lg:text-xl">
          Team up to solve puzzles and battle strategically, strengthening your team to unlock new
          areas. Complete your tasks, overcome obstacles, and ultimately, leave the campus to save
          your own life.
        </p>
        <div className="flex flex-col items-center mt-8 lg:mt-12">
        <p className="text-center text-sm lg:text-xl mb-5 mt-10">WANT TO TRY THE GAME?</p>
          <RetroButton text="DEMO" />
        </div>
      </div>

      {/* Registration Section */}
      <div className="w-30px" style={{height:'70vh',display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Registration />
      </div>
    </div>
  );
};

export default App;
