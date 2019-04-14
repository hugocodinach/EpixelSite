import AbstractService from './AbstractService';
import root from './.api_root';

class GamesService extends AbstractService {

    getGames() {
        return this.request({
            method: 'GET',
            url: root.REACT_APP_API_ROOT + 'games',
        }).then(responseData => {
            if (responseData.ok)
                return responseData.json();
            throw responseData;
        });
    }

    createGames(game) {
        return this.request({
            method: 'POST',
            url: root.REACT_APP_API_ROOT + 'games',
            json: Object.assign({}, game)
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    updateGames(game) {
        return this.request({
            method: 'PUT',
            url: root.REACT_APP_API_ROOT + 'games',
            json: Object.assign({},{
                ObjectId: game._id,
                name: game.name,
                img: game.img
            })
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    deleteGames(objId) {
        return this.request({
            method: 'DELETE',
            url: root.REACT_APP_API_ROOT + 'games',
            json: Object.assign({},{
                ObjectId: objId
            })
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }
}

export default new GamesService();