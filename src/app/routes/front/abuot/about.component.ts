import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../shared/blog.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
    title = 'Ter';
    colors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime'
    ];
    socialLinks = [
        {icon: 'github', type: 'url', content: 'https://github.com/mxnter'},
        {icon: 'mail', type: 'msg', content: 'tearwork@outlook.com'},
        // {icon: 'weibo', type: 'msg', content: 'https://github.com/mxnter'},
        // {icon: 'dingding', type: 'img', content: 'https://github.com/mxnter'},
        {icon: 'wechat', type: 'img', content: 'assets/img/wechatqrcode.png'},
        {icon: 'qq', type: 'msg', content: '374290775'},
    ];

    blogContent = [];

    constructor(public blogService: BlogService) {
        // 获取 Blog
        blogService.blogmsg().subscribe(data => {
            if (data.success) {
                this.blogContent = data.data;
            } else {

            }
        });
        blogService.fed();
    }

    ngOnInit() {
    }


    OpenUrl(url) {
        window.open(url, '_blank');
    }

}
