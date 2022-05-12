import PropTypes from 'prop-types';

const EnglishText = ({ text }) => (
  <>
    <textarea placeholder={text} />
  </>
);

EnglishText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EnglishText;
