import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Volume2, VolumeX } from "lucide-react";
import Head from "./Head";
import Hero from "./Hero";
import FootLayer from "./FootLayer";
import Mehmed from '../assets/Mehmed Fatih intro music.mp3';

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio(Mehmed));

  // Initial setup and autoplay
  useEffect(() => {
    // Setup audio configuration
    audio.loop = true;
    audio.volume = 0.3; // Set a fixed volume
    
    // Function to play audio
    const playAudio = async () => {
      try {
        await audio.play();
        console.log("Audio started playing automatically");
      } catch (error) {
        console.error("Autoplay failed:", error);
        // If autoplay fails, we'll try playing on user interaction
        const handleUserInteraction = async () => {
          try {
            await audio.play();
            console.log("Audio started playing after user interaction");
            // Remove the event listeners once audio starts
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          } catch (err) {
            console.error("Play failed after user interaction:", err);
          }
        };

        // Add listeners for both click and touch events
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
      }
    };

    // Attempt to play immediately
    playAudio();

    // Cleanup function
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array means this runs once on mount

  // Handle mute state
  useEffect(() => {
    audio.muted = isMuted;
  }, [isMuted, audio]);

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (!isMuted) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <MainContainer id="home">
      <Head />
      <Hero />
      <FootLayer />
      <AudioControls>
        <AudioButton 
          onClick={toggleMute}
          $isMuted={isMuted}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </AudioButton>
      </AudioControls>
    </MainContainer>
  );
}

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;
  position: relative;

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #fff;
  }
`;

const AudioControls = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const AudioButton = styled.button`
  background: ${props => props.$isMuted ? 
    'rgba(255, 0, 0, 0.2)' : 
    'linear-gradient(to right, #A586ED 20%, red 30%, #A388ED 70%, lightblue 80%)'
  };
  background-size: 200% 200%;
  animation: ${gradientAnimation} 3s ease infinite;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    z-index: 1;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  }
`;