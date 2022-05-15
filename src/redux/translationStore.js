import * as services from '../service/services';

const POST_TRANSLATION = 'POST_TRANSLATION';
const initialState = {
  translationHistory: [],
  mobileResult: false,
};

export const postTranslation = (englishSentence) => async (dispatch) => {
  const turkishSentence = englishSentence !== '' && await services.postTranslationData(englishSentence);
  dispatch({
    type: POST_TRANSLATION,
    payload: [englishSentence, turkishSentence === false ? '' : turkishSentence],
  });
};

const translationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TRANSLATION:
      return {
        mobileResult: action.payload[0] !== '',
        translationHistory: [...state.translationHistory, action.payload],
      };
    default:
      return state;
  }
};

export default translationReducer;
