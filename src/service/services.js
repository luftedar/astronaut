import axios from "axios";

const libreTranslateEndPoint = "https://libretranslate.com/translate"

const postTranslationData = async (englishSentence) => {
  const translationResult = await axios({
    method: 'post',
    url: libreTranslateEndPoint,
    body: JSON.stringify({
      q: `${englishSentence}`,
      source: "en",
      target: "tr",
      format: "text"
    }),
    headers: {"Content-Type": "applcation/json"}
  }).then((response) => {response.translatedText});
  return translationResult;
};

export {postTranslationData};