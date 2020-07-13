/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-05-18 11:37:14
 */
import { Service, BaseService } from "koatty";
import { App } from '../App';
import http from 'http';
import querystring, { ParsedUrlQueryInput } from 'querystring';

@Service()
export class HttpServiceService extends BaseService {
    app: App;

    /**
     * Custom constructor
     *
     */
    init() {
        //property
    }

    async post (url: string, data: object, headers: object|null) {
        const postData: ParsedUrlQueryInput = {}
        const postData1 = querystring.stringify(postData);
        
    }
}