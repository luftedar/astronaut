import * as apiCalls from '../service/services';

const POST_TRANSLATION = 'POST_TRANSLATION';
const initialState = [];

export const postTranslation = (englishSentece) => async (dispatch) => {
  const turkishWord = await apiCalls.postTranslationData(englishSentece);
  dispatch({
    type: POST_TRANSLATION,
    payload: turkishWord,
  });
};

const translationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TRANSLATION:
      return [...state, action.payload];
    default:
      return state;
  };
};

export default translationReducer;