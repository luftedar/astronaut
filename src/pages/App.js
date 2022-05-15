import { useState } from 'react';
import useVoice from '../helpers/useVoice';
import EnglishText from '../components/EnglishText';
import TurkishText from '../components/TurkishText';
import History from '../components/History';
import '../styles/App.scss';

function App() {
  const voiceRecognition = useVoice();
  const [textState, setTextState] = useState('');
  voiceRecognition.onresult = (event) => {
    setTextState(event.results[0][0].transcript);
  };
  return (
    <div className="App">
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
      <div className="history-container">
        <History />
      </div>
    </div>
  );
}

export default App;
