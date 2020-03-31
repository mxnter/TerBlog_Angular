import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../shared/blog.service';
import {Router} from '@angular/router';

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

    constructor(public blogService: BlogService, public router: Router) {
        // 获取 Blog
        blogService.blogData().subscribe(data => {
            if (data.success) {
                this.blogContent = data.data;
            } else {
                if (data.msg) {
                    console.error(data.msg);
                } else {
                    console.error('请求系统接口错误');
                }
            }
        });
    }

    ngOnInit() {
    }

    seeBlog(id) {
        this.router.navigate(['/details'], {queryParams: {id}});
    }

    OpenUrl(url) {
        window.open(url, '_blank');
    }

}
