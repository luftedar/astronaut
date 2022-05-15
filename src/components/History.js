import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const History = () => {
  const translationHistory = useSelector((state) => state.translationReducer);
  return (
    <div>
      <h2> History </h2>
      <ul>
        {translationHistory.map((history) => (
          <li key={uuid()}>
            <p className="english-result">{history[0]}</p>
            <p className="turkish-result">{history[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
