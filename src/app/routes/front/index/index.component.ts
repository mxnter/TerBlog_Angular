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


    constructor(public blogService: BlogService, public router: Router) {
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

    seeBlog(id) {
        this.router.navigate(['/details'], {queryParams: {id}});
    }
}
