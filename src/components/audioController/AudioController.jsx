import { useRef, useState } from "react";
// styles
import "./AudioController.scss";
// components
import SpeedController from "./speedController/SpeedController";

const AudioController = ({currentEpisodeAudioUrl}) => {
  const audioRef = useRef();
  const [currentSpeedValue, setCurrentSpeedValue] = useState(1);  

  const decreaseAudioSpeed = () => {
    let newVal = audioRef.current.playbackRate - 0.2;
    newVal = Math.round(newVal * 10) / 10;
    if (newVal >= 0.5) {
      audioRef.current.playbackRate = newVal;
      setCurrentSpeedValue(newVal);
    }
  };

  const resetAudioSpeed = () => {
    audioRef.current.playbackRate = 1;
    setCurrentSpeedValue(audioRef.current.playbackRate);
  };

  const increaseAudioSpeed = () => {
    let newVal = audioRef.current.playbackRate + 0.2;
    newVal = Math.round(newVal * 10) / 10;
    if (newVal < 3) {
      audioRef.current.playbackRate = newVal;
      setCurrentSpeedValue(newVal);
    }
  };

  return (
    <div className="audio-controller-container">
      <audio
        id="audio"
        src={currentEpisodeAudioUrl}
        controls
        ref={audioRef}
      ></audio>
      <SpeedController
        decreaseAudioSpeed={decreaseAudioSpeed}
        resetAudioSpeed={resetAudioSpeed}
        increaseAudioSpeed={increaseAudioSpeed}
        speedValue={currentSpeedValue}
      />
    </div>
  );
};

export default AudioController;
