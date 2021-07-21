import "./App.scss";

// components
import Header from "./components/header/Header";
import AudioController from "./components/audioController/AudioController";
import Episode from './components/episode/Episode'

function App() {
  return (
    <div className="App">
      <Header />
      <AudioController />
      <Episode />
    </div>
  );
}

export default App;
