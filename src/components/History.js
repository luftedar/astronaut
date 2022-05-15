import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { changeInputValue } from '../redux/inputStore';
import { postTranslation } from '../redux/translationStore';

const History = () => {
  const dispatch = useDispatch();
  const translationHistory = useSelector((state) => state.translationReducer);
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
                dispatch(postTranslation(e.target.innerText));
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

export default History;
