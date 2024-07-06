import React, { useState } from 'react';
import GamingButton from './GamingButton';

const Registration = () => {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showJoinTeam, setShowJoinTeam] = useState(false);

  return (
    <div >
      {!showJoinTeam && !showCreateTeam && (
        <div className='flex flex-col gap-10'>
            <div className=" flex gap-10">
          <GamingButton text="Join Team"
            onClick={() => setShowJoinTeam(true)}
          />
          <GamingButton text='Create Team'
            onClick={() => setShowCreateTeam(true)}
          />
          </div>
          <GamingButton text='Demo'
          />
        </div>
      )}

      {showJoinTeam && (
        <div className=" rounded flex flex-col gap-10 text-red-400">
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Username" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Email Id" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Password" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Discord Id" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Team Code" />

          <GamingButton text='Back'
            onClick={() => setShowJoinTeam(false)}/>
        </div>
      )}

      {showCreateTeam && (
        <div className=" flex flex-col gap-10 text-red-400">
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Name" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Email Id" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Password" />
          <input type="text" className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' placeholder="Enter Your Discord Id" />
          <GamingButton text='Back'
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => setShowCreateTeam(false)}
          />
          
          <div className=' px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl ' >TEAM CODE: 1231231</div>
        </div>
      )}
    </div>
  );
}

export default Registration;
