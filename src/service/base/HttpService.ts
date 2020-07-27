/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-05-18 11:37:14
 */
import { Service, BaseService } from "koatty";
import { App } from '../../App';
import axios from 'axios';

@Service()
export class HttpService extends BaseService {
    app: App;

    /**
     * Custom constructor
     *
     */
    init() {
        //property
    }

    async post (url: string|null, data: object, headers?: object) {
        const res = await axios({
            method: 'POST',
            url: url,
            data,
            headers
        }).catch((error) => {
            console.log(error);
        })
        console.log(res)
    }
}