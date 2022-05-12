import useVoice from '../helpers/useVoice';
import EnglishText from '../components/EnglishText';
import TurkishText from '../components/TurkishText';
import History from '../components/History';

function App() {
  const voiceRecognition = useVoice();
  return (
    <div className="App">
      <EnglishText startVoiceRecognition={voiceRecognition} />
      <TurkishText />
      <History />
    </div>
  );
}

export default App;
