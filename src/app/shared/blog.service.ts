import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor() {
    }

    blogContent = {
        success: true,
        code: 0,
        data:
            [

                {
                    title: 'TerBlog 正在开发',
                    subtitle: '祈祷,事事顺心',
                    cover: 'http://pic.rmb.bdstatic.com/25c008d6b25d0b0b2ea3d3ada86336fa.jpeg',
                    like: 10,
                    postDate: '2020年3月30日09:47:04',
                    content: ''
                },
                {title: '诶呀,难受', subtitle: '马上就离场了', like: 12, postDate: '2020年3月30日09:47:04', content: ''},
                {title: '这是标题', subtitle: '这是副标题', like: 13, postDate: '2020年3月30日09:47:04', content: ''},
                {
                    title: '这是标题',
                    subtitle: '这是副标题',
                    like: 15,
                    postDate: '2020年3月30日09:47:04',
                    content: ''
                },
            ]
    };
    subject = new Subject<any>();

    blogmsg(): Observable<any> {
        return this.subject.asObservable();
    }

    fed() {
        this.subject.next(this.blogContent);
    }

}
