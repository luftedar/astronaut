import postTranslationData from '../service/services';

const POST_TRANSLATION = 'POST_TRANSLATION';
const initialState = [];

export const postTranslation = (englishSentence) => async (dispatch) => {
  const turkishSentence = await postTranslationData(englishSentence);
  dispatch({
    type: POST_TRANSLATION,
    payload: [englishSentence, turkishSentence],
  });
};

const translationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TRANSLATION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default translationReducer;
