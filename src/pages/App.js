import { useState } from 'react';
import useVoice from '../helpers/useVoice';
import EnglishText from '../components/EnglishText';
import TurkishText from '../components/TurkishText';
import History from '../components/History';
import '../styles/App.scss';

function App() {
  const voiceRecognition = useVoice();
  const [textState, setTextState] = useState('');
  const [showHistoryState, setShowHistoryState] = useState(true);
  voiceRecognition.onresult = (event) => {
    setTextState(event.results[0][0].transcript);
  };
  return (
    <div className="app">
      <h1>English to Turkish</h1>
      <div className="textarea-container">
        <div className="english-container">
          <EnglishText text={textState} />
          <button
            type="submit"
            onClick={() => {
              voiceRecognition.start();
            }}
          >
            Speak
          </button>
        </div>
        <div className="turkish-container">
          <TurkishText />
        </div>
      </div>
      <div className="history-button">
        <button
          type="button"
          onClick={() => {
            setShowHistoryState(!showHistoryState);
          }}
        >
          See History
        </button>
      </div>
      <div
        className={
        showHistoryState
          ? 'history-container'
          : 'history-container show'
      }
      >
        <History />
      </div>
    </div>
  );
}

export default App;
