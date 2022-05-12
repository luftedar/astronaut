import PropTypes from 'prop-types';

const EnglishText = ({ startVoiceRecognition }) => (
  <>
    <textarea />
    <button
      type="submit"
      onClick={startVoiceRecognition}
    >
      Speak
    </button>
  </>
);

EnglishText.propTypes = {
  startVoiceRecognition: PropTypes.shape({
    startVoiceRecognition: PropTypes.func.isRequired,
  }).isRequired,
};

export default EnglishText;
