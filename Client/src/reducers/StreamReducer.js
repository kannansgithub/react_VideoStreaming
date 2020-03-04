import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

// const StreamReducer = (state = [], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       return state.map(stream => {
//         return stream.id === action.payload.id ? action.payload : stream;
//       });
//     default:
//       return state;
//   }
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      //   const newState = { ...state };
      //   newState[action.payload.id] = action.payload;
      //   return newState;
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
