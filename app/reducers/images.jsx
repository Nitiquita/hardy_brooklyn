import { storage } from '../../firebase'
import { dispatch } from 'redux';

/* -----------------    ACTIONS     ------------------ */

const ADD_IMAGE = "ADD_IMAGE";
const GET_IMAGES = "GET_IMAGES";

/* ------------   ACTION CREATORS     ------------------ */

const addImage = image => ({ type: ADD_IMAGE, image})
const getImages = images => ({ type: GET_IMAGES, images });

/* ------------       REDUCER     ------------------ */

const reducer = (images = [], action) => {
  switch (action.type) {
  case GET_IMAGES:
    return action.images
  default:
    return images
  }
}

export default reducer

/* ------------       DISPATCHERS     ------------------ */

export const fetchImages = () => dispatch => {

}

export const addImages = () => dispatch => {

}
