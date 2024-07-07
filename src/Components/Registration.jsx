import { useState } from 'react';
import GamingButton from './GamingButton';


function hexToString(data) {
  return data.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function stringToHex(str) {
  const bytes = new Array(str.length / 2);
  for (let i = 0; i < str.length; i += 2) {
    bytes[i / 2] = parseInt(str.slice(i, i + 2), 16);
  }
  return bytes;
}

function Registration() {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showJoinTeam, setShowJoinTeam] = useState(false);

  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
    DiscordID: '',
    TeamID: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function sendData(data) {
    let tosend = undefined
    const tid = data.TeamID;
    if (tid) { 
      data.TeamID = stringToHex(tid);
      tosend = JSON.stringify(data);
      data.TeamID = tid;
    } else { tosend = JSON.stringify(data); }
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: tosend
    });

    const json =  await response.json()
    if (!json) { throw new Error(`An error occurred while parsing server's response`); }

    if (!response.ok) {
      console.log(response)
      throw new Error(`${json.error}`);
    }
    const {TeamID, SessionID} = json
    if (!TeamID || !SessionID) { throw new Error(`Server's response did not include valid fields`); }
    return [hexToString(TeamID), SessionID]
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // FIXME: set SessionID as a cookie
      const [TeamID, SessionID] = await sendData(formData);
      console.log(TeamID, SessionID);
      alert('User registered successfully!');
    } catch (e) {
      console.error(e);
      alert('Failed to register!\n' + e.message);
    }
  }

  return (
    <div>
      {!showJoinTeam && !showCreateTeam && (
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <GamingButton text="Join Team" onClick={() => setShowJoinTeam(true)} />
            <GamingButton text="Create Team" onClick={() => setShowCreateTeam(true)} />
          </div>
          <GamingButton text="Demo" />
        </div>
      )}

      {showJoinTeam && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-red-400">
          <GamingButton
            text="Back"
            onClick={() => setShowJoinTeam(false)}
            className="self-start"
          />
          <input
            type="text"
            name="Username"
            minLength={3}
            value={formData.Username}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Username"
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Email Id"
          />
          <input
            type="password"
            name="password"
            minLength={8}
            value={formData.Password}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Password"
          />
          <input
            type="text"
            name="DiscordID"
            value={formData.DiscordID}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Discord Id"
          />
          <input
            type="tel"
            name="TeamID"
            minLength={6}
            maxLength={6}
            value={formData.TeamID}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Team Code"
          />
          <GamingButton text="Submit" type="submit" />
        </form>
      )}

      {showCreateTeam && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-red-400">
          <GamingButton
            text="Back"
            onClick={() => setShowCreateTeam(false)}
            className="self-start"
          />
          <input
            type="text"
            name="Username"
            minLength={3}
            value={formData.Username}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Email Id"
          />
          <input
            type="password"
            name="Password"
            minLength={8}
            value={formData.Password}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Password"
          />
          <input
            type="text"
            name="DiscordID"
            value={formData.DiscordID}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Discord Id"
          />
          {/*<div className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl">
            TEAM CODE: {formData.teamCode}
          </div>*/}
          <GamingButton text="Submit" type="submit" />
        </form>
      )}
    </div>
  );
}

export default Registration;
