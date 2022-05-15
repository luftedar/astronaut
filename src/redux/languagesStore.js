import * as service from '../service/services';

const FETCH_LANGUAGES = 'FETCH_LANGUAGES';

const initialState = [];

export const fetchAllLanugages = () => async (dispatch) => {
  const languageData = await service.getAllLanguages();
  dispatch({
    type: FETCH_LANGUAGES,
    languageData,
  });
};

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return [...action.payload];
    default:
      return state;
  }
};

export default languagesReducer;
