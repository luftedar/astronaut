import axios from "axios";

const libreTranslateEndPoint = "https://libretranslate.com/translate"

const postTranslationData = async (englishSentence) => {
  const translationResult = await axios.post(libreTranslateEndPoint, englishSentence).then(response => response.translatedText);
  return translationResult;
};

export default postTranslationData;