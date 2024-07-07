import { useState } from 'react';
import GamingButton from './GamingButton';

const Registration = () => {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showJoinTeam, setShowJoinTeam] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    discordId: '',
    teamCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateRandomTeamCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  async function sendData(data) {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.log(response)
      const json =  await response.json()
      if (!json) { throw new Error(`An error occurred while parsing server response`); }
      throw new Error(`${json.error}`);
    }

    return await response.json()
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (showCreateTeam) {
      const teamCode = generateRandomTeamCode();
      setFormData({ ...formData, teamCode });
    }

    try {
      const data = await sendData(formData);
      console.log(data); // TODO: set this as a cookie
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
            name="username"
            minLength={8}
            value={formData.username}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Username"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Email Id"
          />
          <input
            type="password"
            name="password"
            minLength={8}
            value={formData.password}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Password"
          />
          <input
            type="text"
            name="discordId"
            value={formData.discordId}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Discord Id"
          />
          <input
            type="tel"
            name="teamCode"
            minLength={6}
            maxLength={6}
            value={formData.teamCode}
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
            name="username"
            minLength={8}
            value={formData.username}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Email Id"
          />
          <input
            type="password"
            name="password"
            minLength={8}
            value={formData.password}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Password"
          />
          <input
            type="text"
            name="discordId"
            value={formData.discordId}
            onChange={handleChange}
            className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl"
            placeholder="Enter Your Discord Id"
          />
          <div className="px-5 w-[400px] py-2 bg-inherit border-2 border-pink-600 rounded-xl">
            TEAM CODE: {formData.teamCode}
          </div>
          <GamingButton text="Submit" type="submit" />
        </form>
      )}
    </div>
  );
};

export default Registration;
