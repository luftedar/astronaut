import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrHistory } from 'react-icons/gr';
import { FaMicrophone } from 'react-icons/fa';
import useVoice from '../helpers/useVoice';
import EnglishText from '../components/EnglishText';
import TurkishText from '../components/TurkishText';
import History from '../components/History';
import '../styles/App.scss';
import { changeInputValue } from '../redux/inputStore';
import {
  changeInputLanguage, changeOutputLanguage, fetchAllLanguages,
} from '../redux/languagesStore';

function App() {
  const dispatch = useDispatch();
  const languagesState = useSelector((state) => state.languagesReducer);
  const voiceRecognition = useVoice();
  const [textState, setTextState] = useState('');
  const [showHistoryState, setShowHistoryState] = useState(true);
  const [listeningState, setListeningState] = useState('');
  voiceRecognition.onresult = (event) => {
    setTextState(event.results[0][0].transcript);
    dispatch(changeInputValue(event.results[0][0].transcript));
    setListeningState('');
  };
  useEffect(() => {
    dispatch(fetchAllLanguages());
  }, [dispatch]);
  return (
    (languagesState.loading
      ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )
      : (
        <div className="app">
          <div className="textarea-container">
            <div className="english-container">
              <select
                name="inputValue"
                id="inputValue"
                onChange={(e) => {
                  dispatch(changeInputLanguage(e.target.value));
                }}
              >
                {
            languagesState.languages.map((language) => (
              <option
                value={language.code}
                key={language.code}
              >
                {language.name}
              </option>
            ))
          }
              </select>
              <EnglishText text={textState} />
              <button
                type="submit"
                className={listeningState}
                disabled={languagesState.currentInput !== 'en' && true}
                onClick={() => {
                  voiceRecognition.start();
                  setListeningState('listening');
                }}
              >
                <FaMicrophone />
              </button>
            </div>
            <div className="turkish-container">
              <select
                name="outputValue"
                id="outputValue"
                onChange={(e) => {
                  dispatch(changeOutputLanguage(e.target.value));
                }}
              >
                {
            languagesState.languages.map((language) => (
              (
                <option
                  selected={language.name === 'Turkish' && true}
                  value={language.code}
                  key={language.code}
                >
                  {language.name}
                </option>
              )
            ))
          }
              </select>
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
      )
    )
  );
}

export default App;
