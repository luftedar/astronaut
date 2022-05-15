const API_URL = 'https://translate.argosopentech.com/';

const postTranslationData = async (englishSentence) => {
  const translationResult = await fetch(`${API_URL}translate`, {
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

const getAllLanguages = async () => {
  const languages = await fetch(`${API_URL}languages`);

  return languages;
};

export {
  postTranslationData,
  getAllLanguages,
};
