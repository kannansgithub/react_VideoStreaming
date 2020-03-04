import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import StreamReducer from "./StreamReducer";
import authResucer from "./authReducer";
export default combineReducers({
  auth: authResucer,
  form: formReducer,
  streams: StreamReducer
});
