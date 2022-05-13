import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const History = () => {
  const translationHistory = useSelector((state) => state.translationReducer);
  return (
    <div>
      <ul>
        {translationHistory.map((history) => (
          <li key={uuid()}>{history}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
