import TYPES from '../actions/types';

const INITIAL_STATE = {
    photos: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload };
        default:
            return state;
    }
};