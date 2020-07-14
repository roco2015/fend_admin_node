/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-03-25 15:42:32
 */
import { Controller, BaseController, PostMapping, Body, Autowired } from 'koatty';
import { App } from '../../App';
import { HttpService } from '@/service/HttpService';

@Controller('/monitor')
export class MonitorControllerController extends BaseController {

    @Autowired()
    private httpService: HttpService;

    app: App;

    /**
     * Custom constructor
     *
     */
    init() {
        //...
    }

    @PostMapping('/error')
    error(@Body() body: any) {
        console.log(body.post);
        this.httpService.post(null, body.post);
        return this.ok('receive the report, thanks', {}, 0);
    }
}
