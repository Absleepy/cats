import { API_URL, API_KEY } from "../config/config";
import { 
  fetchCatsAction,
  fetchErrorAction,
  fetchPendingAction
} from "./actions/actions";

export const fetchCats = () => {
  return (dispatch) => { 
    dispatch(fetchPendingAction())
    try {
      fetch(`${API_URL}/breeds`, {
        headers: {
          "x-api-key": API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => dispatch(fetchCatsAction(data)));
    } catch (err) {
      dispatch(fetchErrorAction(err));
    }
  };
};
