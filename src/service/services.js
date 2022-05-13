const postTranslationData = async (englishSentence) => {
  const translationResult = await fetch('https://translate.argosopentech.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: `${englishSentence}`,
      source: 'en',
      target: 'tr',
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json()).then((result) => result.translatedText);
  return translationResult;
};

export default postTranslationData;
