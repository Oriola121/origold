import { useState, useRef } from "react";
import styled from "styled-components";

export default function VideoDisplay({ videoUrl }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Start the video preview on hover without hiding controls
      videoRef.current.play();  // Start preview
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      // Pause video on mouse leave but keep controls visible
      videoRef.current.pause();  // Stop video preview
      videoRef.current.currentTime = 0;  // Reset to the start
    }
  };

  return (
    <VideoContainer>
      <VideoWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Video
          ref={videoRef}
          controls // Default video controls always visible
          muted
          playsInline
          loop={false} // Ensure it doesn't loop after preview
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        {!isHovered && (
          <HoverOverlay>
            <HoverText>Hover to Preview</HoverText>
          </HoverOverlay>
        )}
      </VideoWrapper>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  width: 50%;
  position: relative;

  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 500px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); /* Blurred background */
  border-radius: 10px;
  z-index: 2; /* Ensure overlay appears on top of video */
`;

const HoverText = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;