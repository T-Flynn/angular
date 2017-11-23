import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import {Http, Response,RequestOptions,Headers} from '@angular/http';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id:string;
  constructor(private http:Http,private route:ActivatedRoute,private router:Router) {
    route.params.subscribe(
      params => { this.id = params['id']; }
    );
  }

  ngOnInit() {

  }

}
