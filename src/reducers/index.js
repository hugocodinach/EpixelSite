import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PhotosReducer from './PhotosReducer';
import LanReducer from './LanReducer';
import GamesReducer from './GamesReducer';

export default combineReducers({
    user: UserReducer,
    photos: PhotosReducer,
    lan: LanReducer,
    games: GamesReducer,
});