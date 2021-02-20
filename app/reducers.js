import {combineReducers} from 'redux';

import modalRouter from './containers/ModalRouter/reducer';

const rootReducer = combineReducers({
  modalRouter,
});

export default rootReducer;
