// styles
import "./AudioController.scss";
// components
import SpeedController from "./speedController/SpeedController";

const AudioController = () => {
  return (
    <div className="audio-controller-container">
      <audio id="audio" controls></audio>
      <SpeedController />
    </div>
  );
};

export default AudioController;
