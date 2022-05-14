import { useSelector } from 'react-redux';

const TurkishText = () => {
  const translationResults = useSelector((state) => state.translationReducer);
  return (
    translationResults.length !== 0
      ? <textarea disabled value={(translationResults[translationResults.length - 1])[1]} />
      : <textarea disabled />
  );
};

export default TurkishText;
