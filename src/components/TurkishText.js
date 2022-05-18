import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BsMegaphoneFill } from 'react-icons/bs';

const TurkishText = ({ currentOutput }) => {
  const translationResults = useSelector((state) => state.translationReducer);
  const populateVoiceList = (value) => {
    const speaker = window.speechSynthesis;
    const speakSentence = new SpeechSynthesisUtterance(value);
    speakSentence.lang = 'en-US';
    speaker.speak(speakSentence);
  };
  return (
    translationResults.translationHistory.length !== 0
      ? (
        <>
          <textarea
            value={(
              translationResults.translationHistory[
                translationResults.translationHistory.length - 1])[1]}
            className={translationResults.mobileResult === false ? 'turkish-text-area hide' : 'turkish-text-area'}
          />
          <button
            type="button"
            onClick={() => {
              populateVoiceList(
                (
                  translationResults.translationHistory[
                    translationResults.translationHistory.length - 1])[1],
              );
            }}
            disabled={currentOutput !== 'en'}
          >
            <BsMegaphoneFill />
          </button>
        </>
      )
      : <textarea className={translationResults.mobileResult === false ? 'turkish-text-area hide' : 'turkish-text-area'} />
  );
};

TurkishText.propTypes = {
  currentOutput: PropTypes.string.isRequried,
}.isRequried;

export default TurkishText;
