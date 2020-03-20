import { FETCH_QUOTES, NEW_QUOTE ,COLOR} from '../actions/constants';

const initialState = {
  loading: true,
  error: false,
  data: [],
  randomNumber: '',
  colors: COLOR
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case NEW_QUOTE:
      return {
        ...state,
        randomNumber: action.payload,
      };
    default:
      return state;
  }
}
