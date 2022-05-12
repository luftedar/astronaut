import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const EnglishText = ({ text }) => {
  const [translationValue, setTranslationValue] = useState('');
  useEffect(() => {
    setTranslationValue(text);
  }, [text]);
  return (

    <>
      <textarea
        value={translationValue}
        onChange={(e) => {
          setTranslationValue(e.target.value);
        }}
      />
    </>
  );
};

EnglishText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EnglishText;
