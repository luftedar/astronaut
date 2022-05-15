import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTranslation } from '../redux/translationStore';

const EnglishText = ({ text }) => {
  const dispatch = useDispatch();
  const [translationValue, setTranslationValue] = useState('');
  useEffect(() => {
    setTranslationValue(text);
  }, [text]);
  useEffect(() => {
    const filled = setTimeout(() => {
      if (translationValue !== '') {
        dispatch(postTranslation(translationValue));
      }
    }, 500);
    return () => clearTimeout(filled);
  }, [translationValue]);
  return (
    <>
      <textarea
        className="text-area"
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
