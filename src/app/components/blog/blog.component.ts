import { Component, OnInit } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { DatePipe } from '@angular/common';

declare var $ : any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ DatePipe ]
})
export class BlogComponent implements OnInit {
  constructor(private http:Http,private datePipe: DatePipe) { }

  makeGetUserList() {
    let url='http://127.0.0.1:3009/api/get-blog-list';
    this.http.get(url).subscribe((res:Response)=>{
      let resData = res.json();
      if(parseInt(resData.code)==1){
        console.log(resData);
        let dataArr = this.getblogArr(resData.blog);
        this.renderTable(dataArr);
        var article = $(".blog-article");
        for(let i = 0; i < article.length; i++) {
          if(article.eq(i).text().length > 100) {
            var articleContent = "";
            articleContent = article.eq(i).text().slice(0,100) + "...";
            article.eq(i).text(articleContent);
          }
        }
      }
    })
  }
  getblogArr(blogSet) {
    var _blogArr = blogSet;
    var dataLength = _blogArr.length;
    var blogData = [];

    for(let i = 0; i<dataLength; i++) {
      var arr = [];
      var picStr = "";
      var keywordsStr = "";
      for(let x in _blogArr[i].picture) {
        picStr +=`<img src="${ _blogArr[i].picture[x] }" alt="" height="143">`
      }
      for(let x in _blogArr[i].keywords) {
        keywordsStr += `<span>${ _blogArr[i].keywords[x] }</span>&nbsp;&nbsp;`
      }
      arr[0] = `<div class="row">
                    <div class="col-sm-1"><img src="${ _blogArr[i].photo }" alt="" height="50" style="float: right;border-radius: 50%"></div>
                    <h3 class="col-sm-2">${ _blogArr[i].author }</h3>
                    <h3 class="col-sm-9"><a [routerLink]="['/blogdetail',id]" href="/blog/detail/${ _blogArr[i]._id }">${ _blogArr[i].title }</a></h3>
                    </div>
                    <div class="row">
                    <div class="col-sm-12 blog-article">${ _blogArr[i].content }</div>
                    </div>
                    <div class="row">
                    <div class="col-sm-12">
                    <img src="${ picStr }" alt="" height="143">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-4">${ this.datePipe.transform(_blogArr[i].createdAt,'yyyy-MM-dd HH:mm:ss') }</div>
                    <div class="col-sm-5">${ keywordsStr }</div>
                    <div class="col-sm-3"><span style="border-right: 1px solid #aaa;padding-right: 10px">评论: ${ _blogArr[i].comment.num }</span>&nbsp;<span>阅读量: ${_blogArr[i].view}</span></div>
                    </div>`;
      blogData[i] = arr;
    }
    return blogData;
  }
  //渲染数据
  renderTable(blogSet) {
    $('#example').DataTable( {
      data:blogSet,
      columns: [
        {title:""}
      ]
    } )
  }
  ngOnInit() {
    this.makeGetUserList();
  }

}
