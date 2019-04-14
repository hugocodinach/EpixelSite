import AbstractService from './AbstractService';
import root from './.api_root';

class PhotosService extends AbstractService {

    getPhotos() {
        return this.request({
            method: 'GET',
            url:  root.REACT_APP_API_ROOT + 'photos',
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }
}

export default new PhotosService();