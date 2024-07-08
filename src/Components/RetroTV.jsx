import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const TVContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: #000;
`;

const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #121010;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.9) 100%);
    z-index: 3;
  }
`;

const Noise = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 20;
  opacity: 0;
`;

const ChannelInfo = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  color: #fff;
  font-family: 'VT323', monospace;
  font-size: 24px;
  z-index: 30;
`;

const RetroTV = ({ children }) => {
  const [channel, setChannel] = useState(1);
  const noiseRef = useRef(null);
  const screenRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const noise = noiseRef.current;
    const screen = screenRef.current;
    const content = contentRef.current;

    gsap.set([noise, screen, content], { autoAlpha: 0 });

    const tl = gsap.timeline();

    tl.to(noise, { autoAlpha: 1, duration: 0.2 })
      .to(noise, { autoAlpha: 0, duration: 0.2, repeat: 3, yoyo: true })
      .to(screen, { autoAlpha: 1, duration: 0.2 }, "-=0.2")
      .to(content, { autoAlpha: 1, duration: 0.5 });

    const channelInterval = setInterval(() => {
      setChannel((prevChannel) => (prevChannel % 9) + 1);
    }, 10000);

    return () => clearInterval(channelInterval);
  }, []);

  return (
    <TVContainer>
      <Screen ref={screenRef}>
        <div ref={contentRef}>
          {children}
        </div>
      </Screen>
      <Overlay />
      <Noise ref={noiseRef} />
      <ChannelInfo>CH-{channel}</ChannelInfo>
    </TVContainer>
  );
};

export default RetroTV;