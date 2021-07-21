import { useState } from "react";
//styles
import "./Episode.scss";
import NextIcon from "../../assets/icons/next.png";
import PreviousIcon from "../../assets/icons/previous.png";
// components
import Transcript from "../transcript/Transcript";

const Episode = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const changeTheme = (e) => {
    const transcriptText = document.querySelector(".transcript-text");

    if (isDarkModeEnabled) {
      setIsDarkModeEnabled(false);
      transcriptText.classList.remove("dark-mode");
    } else {
      setIsDarkModeEnabled(true);
      transcriptText.classList.add("dark-mode");
    }
  };

  return (
    <div className="episode-container">
      <div className="episode-header">
        <div className="prev-ep-btn" title="next episode">
          <img src={PreviousIcon} alt="Prev. Ep." />
        </div>
        <div className="ep-title">title</div>
        <div className="prev-ep-btn" title="next episode">
          <img src={NextIcon} alt="Next Ep." />
        </div>
      </div>
      <div className="theme-container">
        <div className="theme-switch-to-name">
          {isDarkModeEnabled ? "Switch To Light Mode" : "Switch To Dark Mode"}
        </div>
        <label className="switch" onChange={changeTheme}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <Transcript />
    </div>
  );
};

export default Episode;
