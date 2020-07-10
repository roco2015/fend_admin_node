/**
 * @ author: xxx
 * @ copyright: Copyright (c)
 * @ license: Apache License 2.0
 * @ version: 2020-03-25 15:42:32
 */
import { Controller, BaseController, PostMapping, Body } from 'koatty';
import { App } from '../../App';

@Controller('/monitor')
export class MonitorControllerController extends BaseController {
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
        return this.ok('receive the report, thanks', {}, 0);
    }
}
