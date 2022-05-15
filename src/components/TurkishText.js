import { useSelector } from 'react-redux';

const TurkishText = () => {
  const translationResults = useSelector((state) => state.translationReducer);
  return (
    translationResults.translationHistory.length !== 0
      ? (
        <textarea
          value={(
            translationResults.translationHistory[
              translationResults.translationHistory.length - 1])[1]}
          className={translationResults.mobileResult === false ? 'turkish-text-area hide' : 'turkish-text-area'}
        />
      )
      : <textarea className={translationResults.mobileResult === false ? 'turkish-text-area hide' : 'turkish-text-area'} />
  );
};

export default TurkishText;
