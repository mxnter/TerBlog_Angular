import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(public http: HttpClient) {
    }

    blogContent;
    subject1 = new Subject<any>();
    subject2 = new Subject<any>();

    carouselData(): Observable<any> {
        return this.http.get('http://140.143.187.23/carousel.json');
    }

    blogData(): Observable<any> {
        return this.http.get('http://140.143.187.23/blog.json');
    }

    getBlogDataContent(id): Observable<any> {
        this.http.get('http://140.143.187.23/blog.json').subscribe(data => {
            this.blogContent = data;
            this.subject2.next(this.blogContent.data.filter(d => d.id == id));
        });
        return this.subject2.asObservable();
    }

}
