// styles
import "./SpeedController.scss";
import DecSpeedIcon from "../../../assets/icons/dec-speed.png";
import IncSpeedIcon from "../../../assets/icons/inc-speed.png";

const SpeedController = ({
  decreaseAudioSpeed,
  resetAudioSpeed,
  increaseAudioSpeed,
  speedValue,
}) => {
  return (
    <div className="speed-controller-container">
      <img
        className="btn"
        src={DecSpeedIcon}
        alt="Dec. Speed"
        onClick={decreaseAudioSpeed}
      />
      <div className="btn reset-speed-btn" onClick={resetAudioSpeed}>
        <div className="speed-value">{`${speedValue}x`}</div>
      </div>
      <img
        className="btn"
        src={IncSpeedIcon}
        alt="Inc. Speed"
        onClick={increaseAudioSpeed}
      />
    </div>
  );
};

export default SpeedController;
