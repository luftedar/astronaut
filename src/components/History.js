import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const History = () => {
  const translationHistory = useSelector((state) => state.translationReducer);
  return (
    <ul>
      {translationHistory.map((history) => (
        <li key={uuid()}>
          {history[0]}
          {' => '}
          {history[1]}
        </li>
      ))}
    </ul>
  );
};

export default History;
