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
import Loader from '../components/Loader';
import LanguageSelect from '../components/LanguageSelect';

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
  const changeLanguage = (languageType, value) => {
    if (languageType === 'inputValue') {
      dispatch(changeInputLanguage(value));
    } else {
      dispatch(changeOutputLanguage(value));
    }
  };
  return (
    (languagesState.loading
      ? (
        <Loader />
      )
      : (
        <div className="app">
          <div className="textarea-container">
            <div className="english-container">
              <LanguageSelect
                type="inputValue"
                changeLanguage={changeLanguage}
                languages={languagesState.languages}
              />
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
              <LanguageSelect
                type="outputValue"
                changeLanguage={changeLanguage}
                languages={languagesState.languages}
              />
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
            <History languages={languagesState} />
          </div>
        </div>
      )
    )
  );
}

export default App;
