//styles
import "./Transcript.scss";
// component
import TranscriptContent from "./transcriptContent/TranscriptContent";

const Transcript = ({ currentSeriesName, currentEpisodeNumber }) => {
  return (
    <div className="transcript-container">
      <div className="transcript-text">
        <TranscriptContent
          currentSeriesName={currentSeriesName}
          currentEpisodeNumber={currentEpisodeNumber}
        />
      </div>
    </div>
  );
};

export default Transcript;
