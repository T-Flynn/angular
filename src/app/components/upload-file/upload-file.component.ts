import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Router} from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  providers:[AuthService]
})
export class UploadFileComponent implements OnInit {

  files : FileList;
  response: Observable<any>;
  message: string;
  para: string;
  year: number;
  month: number;
  timestr: number;
  imgsrc: string;
  constructor(private authService: AuthService,
              private http: Http,private router: Router) {
    var now = new Date();
    this.year= now.getFullYear();
    this.month= now.getMonth() ;
    this.timestr = Date.now();

  }

  getFiles(event){
    this.files = event.target.files;
  }

  submitFile() {
    this.para = `/upload-profile/${this.authService.getUser()}/${this.year}/${this.month}/${this.timestr}`;
    this.makePostUpload(this.files,this.para);
  }

  makePostUpload(fileList,url:string){
    let file: File = fileList[0];
    if(fileList.length > 0) {
      let headers: Headers = new Headers();
      //headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append("enctype", "multipart/form-data");

      let options: RequestOptions = new RequestOptions();
      options.headers = headers;
      options.method = 'POST';
      let formData:FormData = new FormData();
      formData.append('photo', file, file.name);
      alert(this.authService.apiUrl+url);
      this.http.post(this.authService.apiUrl+url, formData,options)
        .subscribe((res: Response) => {
          this.imgsrc=this.authService.remotUrl+res.json().imgpath;
        });
      this.makeGet();
    }
  }
  makeGet() {
    let url = `${this.authService.apiUrl}/profile/${this.authService.getUser()}`;
    this.http.get(url).subscribe((res: Response) => {
      let resData = res.json().data;
      this.imgsrc = this.authService.remotUrl + resData.picture;
    });
  }
  ngOnInit() {
    this.makeGet();
  }

}
