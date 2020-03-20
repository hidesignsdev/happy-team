import { FETCH_QUOTES, NEW_QUOTE } from '../actions/constants';

export const newQuote = randomNo => ({
  type: NEW_QUOTE,
  payload: randomNo,
});

export const fetchQuotes = () => dispatch => {
  fetch(
    'https://gist.githubusercontent.com/c2cdev001/f71998ce2b7ad0e98cf3ce9d00b46153/raw/a408c4ff2e0a4ee3894005cb9e4040c5805aca47/gistfile1.json'
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: FETCH_QUOTES, payload: data.quotes });
    })
    .catch(error => {

    });
};

