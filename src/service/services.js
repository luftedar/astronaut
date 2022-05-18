const API_URL = 'https://translate.argosopentech.com/';

const postTranslationData = async (currentInput, currentOutput, englishSentence) => {
  const translationResult = await fetch(`${API_URL}translate`, {
    method: 'POST',
    body: JSON.stringify({
      q: `${englishSentence}`,
      source: `${currentInput}`,
      target: `${currentOutput}`,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json()).then((result) => result.translatedText);
  return translationResult;
};

const getAllLanguages = async () => {
  const languages = await fetch(`${API_URL}languages`).then((res) => res.json()).then((data) => data);
  return languages;
};

export {
  postTranslationData,
  getAllLanguages,
};
