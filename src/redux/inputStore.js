const CHANGE_VALUE = 'CHANGE_VALUE';
const initialState = [''];

export const changeInputValue = (inputValue) => ({
  type: CHANGE_VALUE,
  payload: inputValue,
});

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default inputReducer;
