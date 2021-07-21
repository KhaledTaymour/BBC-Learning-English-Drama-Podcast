import { useState, useEffect } from "react";
// styles
import "./App.scss";
// components
import Header from "./components/header/Header";
import AudioController from "./components/audioController/AudioController";
import Episode from "./components/episode/Episode";
// data
import data from "./data/seriesAndEpisodes.json";

function App() {
  const [currentSeriesName, setCurrentSeriesName] = useState("The Race");
  const [currentEpisodeNumber, setCurrentEpisodeNumber] = useState(1);
  const [currentEpisodeAudioUrl, setcurrentEpisodeAudioUrl] = useState(
    data["The Race"].episodesAudioBaseUrl.replace("{0}", 1)
  ); // You can change the series name here
  const [currentEpisodeUrl, setCurrentEpisodeUrl] = useState(
    data["The Race"].episodesBaseUrl.replace("{0}", 1)
  );

  useEffect(() => {
    // const fetchBbcPage = async () => {
    //   const urlResults = await fetch(currentEpisodeUrl);
    //   const urlData = await urlResults.text();
    //   console.log();
    // };

    // fetchBbcPage();
  }, []);


  const changeCurrentEpisodeNumber = (goToEpisodeNumber) => {
    if (
      goToEpisodeNumber > 0 &&
      goToEpisodeNumber <= data["The Race"].episodesCount
    ) {
      setCurrentEpisodeNumber(goToEpisodeNumber);
      setcurrentEpisodeAudioUrl(
        data["The Race"].episodesAudioBaseUrl.replace("{0}", goToEpisodeNumber)
      );
      setCurrentEpisodeUrl(data["The Race"].episodesBaseUrl.replace("{0}", 1));
    } else if (goToEpisodeNumber === 0) {
      setCurrentEpisodeNumber(data["The Race"].episodesCount);
      setcurrentEpisodeAudioUrl(
        data["The Race"].episodesAudioBaseUrl.replace(
          "{0}",
          data["The Race"].episodesCount
        )
      );
      setCurrentEpisodeUrl(data["The Race"].episodesBaseUrl.replace("{0}", 1));
    } else if (goToEpisodeNumber > data["The Race"].episodesCount) {
      setCurrentEpisodeNumber(1);
      setcurrentEpisodeAudioUrl(
        data["The Race"].episodesAudioBaseUrl.replace("{0}", 1)
      );
      setCurrentEpisodeUrl(data["The Race"].episodesBaseUrl.replace("{0}", 1));
    }
  };

  return (
    <div className="App">
      <Header />
      <AudioController currentEpisodeAudioUrl={currentEpisodeAudioUrl} />
      <Episode
        currentSeriesName={currentSeriesName}
        currentEpisodeNumber={currentEpisodeNumber}
        changeCurrentEpisodeNumber={changeCurrentEpisodeNumber}
      />
    </div>
  );
}

export default App;
