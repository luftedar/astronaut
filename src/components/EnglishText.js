import React from 'react';

const EnglishText = ({ startVoiceRecognition }) => (
  <>
    <textarea />
    <button
      type="submit"
      onClick={startVoiceRecognition}
    >
      Speak
    </button>
  </>
);

export default EnglishText;
