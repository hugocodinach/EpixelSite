import TYPES from './types';
import UserService from '../services/userService';
import PhotosService from '../services/photosService';
import LanService from '../services/lanService';
import GamesService from '../services/gamesService';

const updateLanSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.UPDATE_LAN_SUCCESS,
        payload: data
    });
}

const updateLanFailure = (dispatch) => {
    dispatch({
        type: TYPES.UPDATE_LAN_FAILURE,
    });
}

export const updateLan = (lan, callback) => {
    return (dispatch) => {
        dispatch({ type: TYPES.UPDATE_LAN });
        LanService.updateLan(lan)
        .then(data => {
            updateLanSuccess(dispatch, data);
            callback();
        })
        .catch(() => updateLanFailure(dispatch));
    };
}

const deleteGamesSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.DELETE_GAMES_SUCCESS,
        payload: data
    });
}

const deleteGamesFailure = (dispatch) => {
    dispatch({
        type: TYPES.DELETE_GAMES_FAILURE,
    });
}

export const deleteGames = objId => {
    return (dispatch) => {
        dispatch({ type: TYPES.DELETE_GAMES });
        GamesService.deleteGames(objId)
        .then(data => deleteGamesSuccess(dispatch, data))
        .catch(() => deleteGamesFailure(dispatch));
    };
}

const updateGamesSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.UPDATE_GAMES_SUCCESS,
        payload: data
    });
}

const updateGamesFailure = (dispatch) => {
    dispatch({
        type: TYPES.UPDATE_GAMES_FAILURE,
    });
}

export const updateGames = game => {
    return (dispatch) => {
        dispatch({ type: TYPES.UPDATE_GAMES });
        GamesService.updateGames(game)
        .then(data => updateGamesSuccess(dispatch, data))
        .catch(() => updateGamesFailure(dispatch));
    };
}

const createGamesSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.CREATE_GAMES_SUCCESS,
        payload: data
    });
}

const createGamesFailure = (dispatch) => {
    dispatch({
        type: TYPES.CREATE_GAMES_FAILURE,
    });
}

export const createGames = game => {
    return (dispatch) => {
        dispatch({ type: TYPES.CREATE_GAMES });
        GamesService.createGames(game)
        .then(data => createGamesSuccess(dispatch, data))
        .catch(() => createGamesFailure(dispatch));
    };
}

const getGamesSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.GET_GAMES_SUCCESS,
        payload: data
    });
}

export const getGames = () => {
    return (dispatch) => {
        dispatch({ type: TYPES.GET_GAMES });
        GamesService.getGames()
        .then(data => {
            getGamesSuccess(dispatch, data);
        });
    };
};

const createLanSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.CREATE_LAN_SUCCESS,
        payload: data
    });
}

const createLanFailure = (dispatch) => {
    dispatch({
        type: TYPES.CREATE_LAN_FAILURE,
    });
}

export const createLan = () => {
    return (dispatch) => {
        dispatch({ type: TYPES.CREATE_LAN });
        LanService.createLan()
        .then(data => createLanSuccess(dispatch, data))
        .catch(() => createLanFailure(dispatch));
    };
}

const getLanSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.GET_LAN_SUCCESS,
        payload: data
    });
}

export const getLan = () => {
    return (dispatch) => {
        dispatch({ type: TYPES.GET_LAN });
        LanService.getLan()
        .then(data => {
            if (Object.keys(data).length === 0) {
                getLanSuccess(dispatch, undefined);
                return;
            }
            getLanSuccess(dispatch, data);
        });
    };
};

const getPhotosSuccess = (dispatch, data) => {
    dispatch({
        type: TYPES.GET_PHOTOS_SUCCESS,
        payload: data
    });
}

export const getPhotos = () => {
    return (dispatch) => {
        dispatch({ type: TYPES.GET_PHOTOS });
        PhotosService.getPhotos()
        .then(data => getPhotosSuccess(dispatch, data));
    };
};

export const disableError = () => {
    return {
        type: TYPES.DISABLE_ERROR,
    }
}

export const triggerLoginLoading = () => {
    return {
        type: TYPES.TRIGGER_LOGIN_LOADING
    }
}

export const connectUser = (user, pass) => {
    return (dispatch) => {
        dispatch({ type: TYPES.CONNECT });
        UserService.logIn({user: user, pass: pass})
        .then(data => connectUserSuccess(dispatch, data.token))
        .catch(() => {
            connectUserFailure(dispatch);
        });
    };
};

const connectUserFailure = (dispatch) => {
    dispatch({
        type: TYPES.CONNECT_FAILURE
    });
}

const connectUserSuccess = (dispatch, token) => {
    dispatch({
        type: TYPES.CONNECT_SUCCESS,
        payload: token
    });
}