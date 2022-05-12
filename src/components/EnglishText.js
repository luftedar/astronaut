import PropTypes from 'prop-types';

const EnglishText = ({ startVoiceRecognition }) => (
  <>
    <textarea />
    <button
      type="submit"
      onClick={() => {
        startVoiceRecognition.start();
      }}
    >
      Speak
    </button>
  </>
);

EnglishText.propTypes = {
  startVoiceRecognition: PropTypes.shape({
    start: PropTypes.func,
  }).isRequired,
};

export default EnglishText;
