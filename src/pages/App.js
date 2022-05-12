import { useState } from 'react';
import useVoice from '../helpers/useVoice';
import EnglishText from '../components/EnglishText';
import TurkishText from '../components/TurkishText';
import History from '../components/History';

function App() {
  const voiceRecognition = useVoice();
  const [textState, setTextState] = useState('');
  voiceRecognition.onresult = (event) => {
    setTextState(event.results[0][0].transcript);
  };
  return (
    <div className="App">
      <EnglishText text={textState} />
      <TurkishText />
      <button
        type="submit"
        onClick={() => {
          voiceRecognition.start();
        }}
      >
        Speak
      </button>
      <History />
    </div>
  );
}

export default App;
