import * as service from '../service/services';

const FETCH_LANGUAGES = 'FETCH_LANGUAGES';

const initialState = {
  currentInput: 'en',
  currentOutput: 'tr',
  languages: [],
};

export const fetchAllLanguages = () => async (dispatch) => {
  const languageData = await service.getAllLanguages();
  dispatch({
    type: FETCH_LANGUAGES,
    languageData,
  });
};

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return {
        currentInput: state.currentInput,
        currentOutput: state.currentOutput,
        languages: [...action.payload],
      };
    default:
      return state;
  }
};

export default languagesReducer;
