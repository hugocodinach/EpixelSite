import TYPES from '../actions/types';

const INITIAL_STATE = {
    games: [],
    gamesLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.GET_GAMES_SUCCESS:
            return { ...state, games: action.payload, gamesLoading: false };
        case TYPES.GET_GAMES:
            return { ...state, gamesLoading: true };
        case TYPES.CREATE_GAMES:
            return { ...state, gamesLoading: true };
        case TYPES.CREATE_GAMES_SUCCESS:
            return { ...state, games: action.payload, gamesLoading: false };
        case TYPES.CREATE_GAMES_FAILURE:
            return { ...state, gamesLoading: false };
        case TYPES.UPDATE_GAMES:
            return { ...state, gamesLoading: true };
        case TYPES.UPDATE_GAMES_FAILURE:
            return { ...state, gamesLoading: false };
        case TYPES.UPDATE_GAMES_SUCCESS:
            return { ...state, games: action.payload, gamesLoading: false };
        case TYPES.DELETE_GAMES:
            return { ...state, gamesLoading: true };
        case TYPES.DELETE_GAMES_FAILURE:
            return { ...state, gamesLoading: false };
        case TYPES.DELETE_GAMES_SUCCESS:
            return { ...state, games: action.payload, gamesLoading: false };
        default:
            return state;
    }
};