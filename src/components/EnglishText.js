import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValue } from '../redux/inputStore';
import { postTranslation } from '../redux/translationStore';

const EnglishText = ({ text }) => {
  const inputState = useSelector((state) => state.inputReducer);
  const dispatch = useDispatch();
  const [translationValue, setTranslationValue] = useState('');
  useEffect(() => {
    setTranslationValue(text);
  }, [text]);
  useEffect(() => {
    const filled = setTimeout(() => {
      dispatch(postTranslation(translationValue));
    }, 500);
    return () => clearTimeout(filled);
  }, [translationValue]);
  return (
    <>
      <textarea
        className="text-area"
        value={inputState[inputState.length - 1]}
        onChange={(e) => {
          setTranslationValue(e.target.value);
          dispatch(changeInputValue(e.target.value));
        }}
      />
    </>
  );
};

EnglishText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EnglishText;
