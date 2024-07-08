'use strict';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GamingButton from './GamingButton';
import Cookies from 'js-cookie';

import './reg.css';

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

function validateFormData(formData, showJoinTeam) {
  const errors = {};

  if (!formData.Username.trim()) {
    errors.Username = 'Username is required';
  } else if (formData.Username.length < 3) {
    errors.Username = 'Username must be at least 3 characters long';
  }

  if (!formData.Email.trim()) {
    errors.Email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
    errors.Email = 'Email is invalid';
  }

  if (!formData.Password) {
    errors.Password = 'Password is required';
  } else if (formData.Password.length < 8) {
    errors.Password = 'Password must be at least 8 characters long';
  }

  if (!formData.DiscordID.trim()) {
    errors.DiscordID = 'Discord ID is required';
  }

  if (showJoinTeam && (!formData.TeamID || formData.TeamID.length !== 6)) {
    errors.TeamID = 'Team Code must be exactly 6 characters long';
  }

  return errors;
}

function Registration() {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showJoinTeam, setShowJoinTeam] = useState(false);
  const formRef = useRef(null);
  const pixiRef = useRef(null);
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
    DiscordID: '',
    TeamID: '',
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out' }
    );
  }, [showCreateTeam, showJoinTeam]);



  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function sendData(data) {
    let tosend = undefined;
    const tid = data.TeamID;
    if (tid) {
      const hexed = stringToHex(tid)
      data.TeamID = hexed;
      tosend = JSON.stringify(data);
    } else {
      data.TeamID = undefined;
      tosend = JSON.stringify(data);
    }
    data.TeamID = tid;
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: tosend,
    });

    const json = await response.json();
    if (!json) {
      throw new Error(`An error occurred while parsing the server's response`);
    }

    if (!response.ok) {
      throw new Error(`${json.error}`);
    }
    const { TeamID, SessionID } = json;
    if (!TeamID || !SessionID) {
      throw new Error(`The server's response did not include valid fields`);
    }
    return [hexToString(TeamID), SessionID];
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const errors = validateFormData(formData, showJoinTeam);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const [TeamID, SessionID] = await sendData(formData);
      console.log(TeamID, SessionID);
      Cookies.set('SessionID', SessionID, { expires: 1, secure: true });
      alert('User registered successfully!');
    } catch (e) {
      alert('Failed to register!\n' + e.message);
    }
  }

  return (
    <div id="Register" className="register flex flex-col items-center justify-center">
      <div ref={pixiRef} className="coin-animation"></div>
      {!showJoinTeam && !showCreateTeam && (
        <div className="flex flex-col gap-10 " ref={formRef}>
          <h1 className='w-full text-center text-2xl content '>Register Here</h1>
          <div className="flex gap-10">
            <GamingButton text="Join Team" onClick={() => setShowJoinTeam(true)} className="gaming-button" />
            <GamingButton text="Create Team" onClick={() => setShowCreateTeam(true)} className="gaming-button" />
          </div>
          <GamingButton text="Demo" className="gaming-button"/>
        </div>
      )}

      {(showJoinTeam || showCreateTeam) && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center text-red-400" ref={formRef}>
          <GamingButton
            text="Back"
            onClick={() => { setShowJoinTeam(false); setShowCreateTeam(false); }}
            className="self-start gaming-button"
          />
          <input
            type="text"
            name="Username"
            minLength={3}
            value={formData.Username}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter Your Username"
          />
          {formErrors.Username && <p className="error-message">{formErrors.Username}</p>}
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter Your Email Id"
          />
          {formErrors.Email && <p className="error-message">{formErrors.Email}</p>}
          <input
            type="password"
            name="Password"
            minLength={8}
            value={formData.Password}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter Your Password"
          />
          {formErrors.Password && <p className="error-message">{formErrors.Password}</p>}
          <input
            type="text"
            name="DiscordID"
            value={formData.DiscordID}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter Your Discord Id"
          />
          {formErrors.DiscordID && <p className="error-message">{formErrors.DiscordID}</p>}
          {showJoinTeam && (
            <>
              <input
                type="tel"
                name="TeamID"
                minLength={6}
                maxLength={6}
                value={formData.TeamID}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter Team Code"
              />
              {formErrors.TeamID && <p className="error-message">{formErrors.TeamID}</p>}
            </>
          )}
          <GamingButton text="Submit" type="submit" className="gaming-button" />
        </form>
      )}
    </div>
  );
}

export default Registration;
