import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../../shared/blog.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
    title = 'TerBlog';
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
