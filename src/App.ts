/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-05-14 00:19:42
 */
import { Koatty, Bootstrap } from "koatty";
// import * as path from "path";

@Bootstrap(
    //bootstrap function
    (app: any) => {
        //调整libuv线程池大小
        // process.env.UV_THREADPOOL_SIZE = "128";
        //忽略https自签名验证
        // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }
)
// @ComponentScan('./')
// @ConfiguationScan('./config')
export class App extends Koatty {
    public init() {
        // this.root_path = path.dirname(__dirname);
        // this.app_debug = true; //线上环境请将debug模式关闭，即：app_debug:false
    }
}
