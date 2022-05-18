import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { changeInputValue } from '../redux/inputStore';
import { postTranslation } from '../redux/translationStore';

const History = ({ languages }) => {
  const dispatch = useDispatch();
  const translationHistory = useSelector((state) => state.translationReducer);
  console.log(languages);
  return (
    <div>
      <h2> History </h2>
      <ul>
        {translationHistory.translationHistory.map((history) => (
          history[0] !== '' && history[1] !== ''
          && (
          <li key={uuid()}>
            <button
              type="button"
              className="english-result no-button"
              onClick={(e) => {
                dispatch(postTranslation(languages.currentInput,
                  languages.currentOutput,
                  e.target.innerText));
                dispatch(changeInputValue(e.target.innerText));
              }}
            >
              {history[0]}
            </button>
            <p className="turkish-result">{history[1]}</p>
          </li>
          )
        ))}
      </ul>
    </div>
  );
};

History.propTypes = {
  languages: PropTypes.shape({
    currentInput: PropTypes.string.isRequired,
    currentOutput: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    loading: PropTypes.bool,
  }).isRequired,
};

export default History;
