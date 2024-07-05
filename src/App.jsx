import React from 'react';
import HeroSection from './Components/HeroSection';
import './index.css'
import Registration from './Components/Registration';
const App = () => {
  
  return (
    <>
      <div className="flex w-full h-[100vh] justify-center items-center ">
        <HeroSection />
      </div>

      <div className="content mx-[200px] border-none mt-10 ">
      As a student in Thapar, your mission in Syrinx is to explore the pixelated Tiet campus, tackling quests in locations like Nirvana, G-Block, and CSED. 
      <br /><br />
      Team up to solve puzzles and battle strategically, strengthening your team to unlock new areas. Complete your tasks, overcome obstacles, and ultimately, leave the campus to save your own life.
      <br />

      <div className="flex flex-col justify-center items-center gap-10 mt-10">
        WANT TO TRY THE GAME?

        <button className="gaming-button">DEMO</button>
      </div>
      <br />
      </div>

      <div className="flex w-full h-[100vh] justify-center items-center">
        <Registration />
      </div>
      
    </>
  )
}

export default App;
