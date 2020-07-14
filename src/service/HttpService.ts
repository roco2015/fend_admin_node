/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-05-18 11:37:14
 */
import { Service, BaseService } from "koatty";
import { App } from '../App';
import http from 'http';

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

    async post (url: string, data: object, headers?: object) {
        const options = {
            hostname: 'https://oapi.dingtalk.com',
            port: 80,
            path: '/robot/send?access_token=cb40b1f153563d1b96e5d00c8373ba54d8ad4c40ae9789c103d7390156156c39',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const req = http.request(options, (res) => {
            console.log(`状态码: ${res.statusCode}`);
            console.log(`响应头: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
              console.log(`响应主体: ${chunk}`);
            });
            res.on('end', () => {
              console.log('响应中已无数据');
            });
        });
          
        req.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
        });
          
        // 将数据写入请求主体。
        req.write(data);
        req.end();
    }
}