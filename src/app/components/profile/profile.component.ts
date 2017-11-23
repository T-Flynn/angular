import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthService } from "../../services/auth.service";

declare var $: any;
declare var validator: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  pictureUrl: string;
  profileForm: FormGroup;
  isFemale: string;
  isMale: string;
  gender:any;

  constructor(private fb:FormBuilder,private authService: AuthService,private http: Http) {

    this.isFemale = '';
    this.isMale = '';
  }
  makeGet(): void {
    let queryStr = `${this.authService.apiUrl}/profile/${localStorage.getItem('username')}`;
    console.log(queryStr);
    this.http.get(queryStr)
      .subscribe((res: Response) => {
        if(parseInt(res.json().code)==1){
          let resData = res.json().data;
          this.profileForm = this.fb.group({
            'phone': [resData.phone,Validators.required],
            'email': [this.doShowEmail(resData.email,resData.phone),Validators.compose([
              Validators.required,this.emailValidator])],
            'nickName': [resData.nickName,Validators.minLength(4)],
            'address':[resData.address,Validators.minLength(1)],
            'realName':[resData.realName],
            'age':[resData.age]
          });
          this.pictureUrl = `${this.authService.remotUrl}/${resData.picture}`;

          this.doShowGender(resData.gender);
          this.gender = resData.gender;
        }
        if(parseInt(res.json().code)==0){


        }

      });
  }
  //自定义验证器emailValidator
  emailValidator(control: FormControl): {
    [s: string]: boolean } {
    if (!validator.isEmail(control.value)) {
      return {invalidEmail: false};
    }
  }
  doShowEmail(str: string,phone: string): string {
    let arr = str.split('@');
    let ret = str;
    if (arr[0] === phone && arr[1] === 'api.com') {
      ret = '';
    }
    return ret;
  }
  doShowGender(str: any) {
    if (parseInt(str) === 1) {
      this.isMale = 'checked';
    }
    if (parseInt(str) === 0) {
      this.isFemale = 'checked';
    }
  }
  getGender(val) {
    this.gender=val;
  }
  doSubmit(formData: any) {
    console.log(formData);
    let {phone,realName,nickName,address,gender,age,email} = formData;
    let strData = `phone=${phone}&realName=${realName}&nickName=${nickName}&address=${address}&gender=${this.gender}&age=${age}&email=${email}`;
    alert(strData);
    this.makePost(strData);
  }
  makePost(strData: string): void {
    //this.loading = true;
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    options.method = 'POST';
    let bodyStr = strData;
    this.http.post(this.authService.apiUrl+'/save-profile', bodyStr,options)
      .subscribe((res: Response) => {

        console.log("res.json()======",res.json());
        if(parseInt(res.json().code)==0){
          //alert(res.json().msg);
        }
        if(parseInt(res.json().code)==1){
          //alert(res.json().data.phone);
        }
        this.makeGet();
      });
  }
  ngOnInit() {
    //默认加载数据
    this.makeGet();
  }

}
