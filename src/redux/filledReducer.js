const ADD_FILLED_ITEMS = 'ADD_FILLED_ITEMS';
const REMOVE_FILLED_ITEMS = 'REMOVE_FILLED_ITEMS';

const defaultState = {
  data: []
};

export const filledReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FILLED_ITEMS:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case REMOVE_FILLED_ITEMS:
      return {
        ...state,
        data: state.data.filter(item => action.payload !== item)
      };
    default: return state;
  };
};

export const addFilledItems = filledItems => ({ type: ADD_FILLED_ITEMS, payload: filledItems });
export const removeFilledItems = filledItems => ({ type: REMOVE_FILLED_ITEMS, payload: filledItems });