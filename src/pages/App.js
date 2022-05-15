import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrHistory } from 'react-icons/gr';
import { FaMicrophone } from 'react-icons/fa';
import useVoice from '../helpers/useVoice';
import EnglishText from '../components/EnglishText';
import TurkishText from '../components/TurkishText';
import History from '../components/History';
import '../styles/App.scss';
import { changeInputValue } from '../redux/inputStore';

function App() {
  const dispatch = useDispatch();
  const voiceRecognition = useVoice();
  const [textState, setTextState] = useState('');
  const [showHistoryState, setShowHistoryState] = useState('');
  const [listeningState, setListeningState] = useState(false);
  voiceRecognition.onresult = (event) => {
    setTextState(event.results[0][0].transcript);
    dispatch(changeInputValue(event.results[0][0].transcript));
    setListeningState('');
  };
  return (
    <div className="app">
      <h1>English to Turkish</h1>
      <div className="textarea-container">
        <div className="english-container">
          <EnglishText text={textState} />
          <button
            type="submit"
            className={listeningState}
            onClick={() => {
              voiceRecognition.start();
              setListeningState('listening');
            }}
          >
            <FaMicrophone />
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
            setListeningState(!listeningState);
          }}
        >
          <GrHistory />
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
