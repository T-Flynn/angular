import { Component, OnInit } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import {AuthService} from '../../services/auth.service';


declare var $: any;
declare var validator: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [ AuthService ]
})
export class SignInComponent implements OnInit {

  captcha: string;
  invalidPhone: boolean;
  invalidPwd:boolean;
  invalidCaptcha:boolean;
  constructor(private authService: AuthService, private http: Http) {
    this.captcha = authService.captchaUrl;
    this.invalidPhone = false;
    this.invalidPwd = false;
    this.invalidCaptcha = false;
  }
  doSubmit(formData: any,obj: any) {
    let {phone,pwd,captcha} = formData;
    let strData = `phone=${phone}&pwd=${pwd}&captcha=${captcha}`;
    //alert(strData);
    this.makePost(strData,obj);
  }
  makePost(strData: string,obj:any): void {
    //this.loading = true;
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options: RequestOptions = new RequestOptions();
    options.headers = headers;
    options.method = 'POST';
    let bodyStr = strData;
    this.http.post(this.authService.apiUrl+'/signIn', bodyStr,options)
    //this.http.get('http://cd.exp hbs.com:3009/api/sign-up')
      .subscribe((res: Response) => {

        console.log("res.json()======",res.json());
        if(parseInt(res.json().code)==0){
          //this.captchaAuth = false;
          //alert(res.json().msg);
        }
        if(parseInt(res.json().code)==1){
          //alert(res.json().data.phone);
          obj.click();
          localStorage.setItem('username', res.json().data.phone);
        }


        // this.loading = false;
        // this.router.navigate(['/about']);
      });
  }
  getCaptcha() {
    this.captcha = this.authService.getCaptcha();
  }

  doValidatorFormPhone(formData:any){
    if(!validator.isMobilePhone(formData.phone,'zh-CN')){
      this.invalidPhone =  true;
      //alert("你填入的手机号码无效");
      return false;
    }
    else
    {
      this.invalidPhone =  false;
    }
  }
  doValidatorFormPwd(formData:any){
    if(!validator.isLength(formData.pwd, {min: 6, max: 20})){
      this.invalidPwd =  true;
      //alert("你填入的密码无效");
      return false;
    }
    else
    {
      this.invalidPwd =  false;
    }
  }
  doValidatorFormCaptcha(formData:any){
    if(!validator.isLength(formData.captcha,4)){
      this.invalidCaptcha =  true;
      //alert("验证码长度错误");
      return false;
    }
    else
    {
      this.invalidCaptcha =  false;
    }
  }

  ngOnInit() {
  }

}
