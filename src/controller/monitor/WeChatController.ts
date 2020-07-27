/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-03-25 15:42:32
 */
import { Controller, BaseController, PostMapping, Body, Autowired } from 'koatty';
import { App } from '../../App';
import { WeChatService } from '../../service/monitor/WeChatService';

@Controller('/wechat')
export class WeChatController extends BaseController {

    @Autowired()
    private weChatService: WeChatService;

    app: App;

    /**
     * Custom constructor
     *
     */
    init() {
        //...
    }

    @PostMapping('/send')
    send(@Body() body: any) {
        console.log(body.post);
        this.weChatService.sendMessage(body.post);
        return this.ok('received, thanks', {}, 0);
    }
}
