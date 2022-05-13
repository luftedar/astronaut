import { useSelector } from 'react-redux';

const TurkishText = () => {
  const translationResults = useSelector((state) => state.translationReducer);
  return (
    <textarea disabled value={(translationResults[translationResults.length - 1])[1]} />
  );
};

export default TurkishText;
