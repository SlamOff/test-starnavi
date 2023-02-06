import { createStore } from 'redux';
import { filledReducer } from './filledReducer';
const store = createStore(filledReducer);

export default store;