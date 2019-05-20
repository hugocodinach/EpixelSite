import AbstractService from './AbstractService';
import root from './.api_root';

class LanService extends AbstractService {

    getLan() {
        return this.request({
            method: 'GET',
            url: root.REACT_APP_API_ROOT + 'lan',
        }).then(responseData => {
            if (responseData.ok)
                return responseData.json();
            throw responseData;
        });
    }

    createLan() {
        return this.request({
            method: 'POST',
            url: root.REACT_APP_API_ROOT + 'lan',
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    updateLan(lan) {
        return this.request({
            method: 'PUT',
            url: root.REACT_APP_API_ROOT + 'lan',
            json: {
                name: lan.name,
                date: lan.date,
                games: lan.games,
                ObjectId: lan._id,
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }
}

export default new LanService();