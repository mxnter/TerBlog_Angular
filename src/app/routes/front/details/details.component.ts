import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {BlogService} from '../../../shared/blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  blogData: any;
  constructor(private route: ActivatedRoute, public platformLocation: PlatformLocation, public blogService: BlogService) {
    route.queryParamMap.subscribe(d => {
      blogService.getBlogDataContent(d.get('id')).subscribe(data => {
        this.blogData =  data[0];
      });
    });
  }

  ngOnInit() {
  }

  onBack(): void {
    history.back();
  }
}
