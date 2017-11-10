import { Component, OnInit } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';


declare var $: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private http:Http) { }
  makeGetUserList() {
    let url='http://127.0.0.1:3009/api/merchant-list';
    this.http.get(url).subscribe((res:Response)=>{
      let resData = res.json();
      if(parseInt(resData.code)==1){
        let dataArr = this.getDataArr(resData.users);
        this.renderTable(dataArr);
      }
    })
  }
  getDataArr(user) {
    var _userArr = user;
    var jsoncount =_userArr.length;
    var userData =  new Array();

    for(var i=0;i<jsoncount;i++)
    {
      var _arr = new Array();
      _arr[0]= "<input type='checkbox'>";
      _arr[1]= _userArr[i].realName;
      _arr[2]= _userArr[i].nickName;
      _arr[3]= _userArr[i].address;
      _arr[4]= _userArr[i].email;
      if(parseInt(_userArr[i].gender) === 1)
      {
        _arr[5]= "男";
      }
      if(parseInt(_userArr[i].gender) === 0)
      {
        _arr[5]= "女";
      }
      _arr[6]= _userArr[i].phone;
      _arr[7]= _userArr[i].age;
      _arr[8]= '<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#gridSystemModal" onclick="edit(\''+_userArr[i]._id+'\')"> \
			 <span class="glyphicon glyphicon-pencil"></span> \
		  <tton>  \
		<button type="button" class="btn btn-danger btn-sm" data-toggle="modal" \
		 data-target="#deleteModal" onclick="edit(\''+_userArr[i]._id+'\')"> \
		<span class="glyphicon glyphicon-trash"></span> \
	<tton>';
      userData[i]=_arr;
    }
    return userData;
  }

  //渲染数据
  renderTable(user) {
    $('#example').DataTable( {
      data:user,
      columns: [
        { title:'<input type="checkbox" >'},
        { title: "realname" },
        { title: "nickname" },
        { title: "address"},
        { title: "email" },
        { title: "gender" },
        { title: "phone" },
        { title: "age" },
        { title: "操作",orderable: false }
      ]
    } );

  }
  ngOnInit() {
    this.makeGetUserList();
  }

}
