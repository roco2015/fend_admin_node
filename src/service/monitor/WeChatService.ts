/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-05-18 11:37:14
 */
import { Service, BaseService, Autowired } from "koatty";
import { App } from '../../App';
import { HttpService } from "../base/HttpService";
import dingDingMessageBO from "../../model/BO/wechat/DingDingMessageBO";

@Service()
export class WeChatService extends BaseService {
    app: App;

    @Autowired()
    private httpService: HttpService;

    /**
     * Custom constructor
     *
     */
    init() {
        //property
    }

    async sendMessage(data: any) {
        const msgObj = dingDingMessageBO.getObj(data.content)
        this.httpService.post(
            'https://oapi.dingtalk.com/robot/send?access_token=cb40b1f153563d1b96e5d00c8373ba54d8ad4c40ae9789c103d7390156156c39',
            msgObj
        )
    }
}