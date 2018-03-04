import { combineReducers } from 'redux'
import { ADD_IMAGE, GET_IMAGES} from '../reducers/images'

const initialState = {
  width: 0,
  height: 0,
  images: [],
  selectedImages: [],
  backgroundImage: '',
  image: "",
  isUploading: false,
  progress: 0,
  imageURL: "",
  selectedRadio: null,
}


const rootReducer = function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case ADD_IMAGE:
      newState.image = action.image;
      break;

    case GET_IMAGES:
      newState.images = action.images;
      break;

    default:
      return state;

  }

  return newState;
};
export default rootReducer;
