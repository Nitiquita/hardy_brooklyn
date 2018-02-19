import { combineReducers } from 'redux'
import { GET_IMAGES } from '../reducers/images'

const intialState = {
  images: [],
  selectedImages: [],
  backgroundImage: ''
}



// const rootReducer = function (state = initialState, action) {

//   const newState = Object.assign({}, state);

//   switch (action.type) {

//     case GET_IMAGES:
//       newState.images = action.images
//       break;

//     default:
//       return state;

//   }

//   return newState;
// };

export default rootReducer;
