import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../shared/blog.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
    title = 'TerBlog';
    blogContent = [];
    carouselData = [];

    constructor(public blogService: BlogService, public router: Router) {
        // 获取 轮播图
        blogService.carouselData().subscribe(data => {
            if (data.success) {
                this.carouselData = data.data;
            } else {
                if (data.msg) {
                    console.error(data.msg);
                } else {
                    console.error('请求系统接口错误');
                }
            }
        });
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

    OpenUrl(url) {
        window.open(url, '_blank');
    }

    seeBlog(id) {
        this.router.navigate(['/details'], {queryParams: {id}});
    }
}
