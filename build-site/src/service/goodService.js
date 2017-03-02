
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import * as DataJson from './dataJson';

let SERVER_URL = DataJson.XIAOWEI_COURSE_JSON;

class GoodService {

    query(type = 'XIAOWEI', cb) {
        SERVER_URL=DataJson[type+'_COURSE_JSON'];
        if (!cb) throw new Error("Bad response from server");
        fetch(`${SERVER_URL}`, {
            method: 'GET'
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(result => {
            console.log(result);
            cb(result || []);
        });
    }
}

export default new GoodService();
