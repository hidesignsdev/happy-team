import { combineReducers } from 'redux';
import calculatorReducer from './InputReducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer
});

export default rootReducer;