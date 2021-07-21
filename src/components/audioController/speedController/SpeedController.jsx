// styles
import "./SpeedController.scss";
import DecSpeedIcon from "../../../assets/icons/dec-speed.png";
import IncSpeedIcon from "../../../assets/icons/inc-speed.png";

const SpeedController = () => {
  return (
    <div className="speed-controller-container">
      <img src={DecSpeedIcon} alt="Dec. Speed"/>
      <div className="reset-speed-btn">
        <div className="speed-value"></div>
      </div>
      <img src={IncSpeedIcon} alt="Inc. Speed"/>
    </div>
  );
};

export default SpeedController;
