import * as service from '../service/services';

const FETCH_LANGUAGES = 'FETCH_LANGUAGES';
const CHANGE_INPUT = 'CHANGE_INPUT';
const CHANGE_OUTPUT = 'CHANGE_OUTPUT';

const initialState = {
  currentInput: 'en',
  currentOutput: 'tr',
  languages: [],
  loading: true,
};

export const fetchAllLanguages = () => async (dispatch) => {
  const languageData = await service.getAllLanguages();
  dispatch({
    type: FETCH_LANGUAGES,
    payload: languageData,
  });
};

export const changeInputLanguage = (payload) => ({
  type: CHANGE_INPUT,
  payload,
});

export const changeOutputLanguage = (payload) => ({
  type: CHANGE_OUTPUT,
  payload,
});

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return {
        currentInput: state.currentInput,
        currentOutput: state.currentOutput,
        languages: [...action.payload],
        loading: false,
      };
    case CHANGE_INPUT:
      return {
        currentInput: action.payload,
        currentOutput: state.currentOutput,
        languages: [...state.languages],
        loading: state.loading,
      };
    case CHANGE_OUTPUT:
      return {
        currentInput: state.currentInput,
        currentOutput: action.payload,
        languages: [...state.languages],
        loading: state.loading,
      };
    default:
      return state;
  }
};

export default languagesReducer;
