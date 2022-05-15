import { useSelector } from 'react-redux';

const TurkishText = () => {
  const translationResults = useSelector((state) => state.translationReducer);
  return (
    translationResults.length !== 0
      ? <textarea value={(translationResults[translationResults.length - 1])[1]} className="turkish-text-area" />
      : <textarea className="turkish-text-area" />
  );
};

export default TurkishText;
