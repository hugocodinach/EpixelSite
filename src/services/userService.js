import AbstractService from './AbstractService';
import root from './.api_root';
import { sha256 } from 'js-sha256';

class UserService extends AbstractService {

    logIn(options) {
        options.pass = sha256(options.pass);
        options.pass = sha256(options.pass);
        return this.request({
            method: 'GET',
            url:  root.REACT_APP_API_ROOT + 'users/login?user=' + options.user + '&pass=' + options.pass,
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }
}

export default new UserService();