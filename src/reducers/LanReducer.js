import TYPES from '../actions/types';

const INITIAL_STATE = {
    lan: undefined,
    getLoading: true,
    updateLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_LAN_SUCCESS:
            return { ...state, lan: action.payload, getLoading: false };
        case TYPES.CREATE_LAN:
            return { ...state, getLoading: true };
        case TYPES.CREATE_LAN_SUCCESS:
            return { ...state, lan: action.payload, getLoading: false };
        case TYPES.CREATE_LAN_FAILURE:
            return { ...state, getLoading: false };
        case TYPES.UPDATE_LAN:
            return { ...state, updateLoading: true };
        case TYPES.UPDATE_LAN_SUCCESS:
            return { ...state, lan: action.payload, updateLoading: false };
        case TYPES.UPDATE_LAN_FAILURE:
            return { ...state, updateLoading: false };
        default:
            return state;
    }
};