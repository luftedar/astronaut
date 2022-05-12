const useVoice = () => {
  let recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  return recognition;
}

export default useVoice;