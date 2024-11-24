/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Volume2, VolumeX } from "lucide-react";
import Head from "./Head";
import Hero from "./Hero";
import FootLayer from "./FootLayer";
import Mehmed from "../assets/MehmedFatih.mp3";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio(Mehmed));
  const [showIndicator, setShowIndicator] = useState(false);

  // Initial setup and autoplay
  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3;

    const playAudio = async () => {
      try {
        await audio.play();
        console.log("Audio started playing automatically");
      } catch (error) {
        console.error("Autoplay failed. Waiting for user interaction.", error);
        setShowIndicator(true); // Show the overlay for user interaction

        const handleUserInteraction = async () => {
          try {
            await audio.play();
            console.log("Audio started playing after user interaction");
            setShowIndicator(false); // Hide the overlay after interaction
            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
          } catch (err) {
            console.error("Play failed after user interaction:", err);
          }
        };

        // Add event listeners for user interaction
        document.addEventListener("click", handleUserInteraction);
        document.addEventListener("touchstart", handleUserInteraction);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

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
      {showIndicator && (
        <Overlay>
          <IndicatorText>Click anywhere to listen to sound</IndicatorText>
        </Overlay>
      )}
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

// Styled components
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const IndicatorText = styled.div`
  color: #fff;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  background: ${(props) =>
    props.$isMuted
      ? "rgba(255, 0, 0, 0.2)"
      : "linear-gradient(to right, #A586ED, #FF5555, #A388ED, #5FADE4)"};
  background-size: 300% 300%;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  animation: ${(props) =>
    props.$isMuted ? "" : "gradientFlow 3s infinite, zoomOutIn 1s infinite"};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes zoomOutIn {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
  }
`;
