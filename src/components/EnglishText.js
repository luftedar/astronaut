import PropTypes from 'prop-types';

const EnglishText = ({ text }) => (
  <>
    <textarea value={text} />
  </>
);

EnglishText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EnglishText;
