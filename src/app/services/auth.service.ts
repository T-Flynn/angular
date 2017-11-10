import { Injectable } from '@angular/core';

import { config } from '../../config/app.config';


@Injectable()
export class AuthService {
  config: any;
  remotUrl: string;
  apiUrl: string;
  captchaUrl: string;
  constructor() {
     this.remotUrl = config.API_HOST;
     this.apiUrl = config.API_ENDPOINT;
     this.captchaUrl =config.API_CAPTCHA+'?t='+ Date.now()+ Math.random();

   }
   getCaptcha() {
    return  this.captchaUrl =this.apiUrl+'/captcha?t='+ Date.now()+ Math.random();
   }
   login(user: string, password: string): boolean {
    if (user === this.getUser()) {
           localStorage.setItem('username', user);
        return true;
      }

      return false;
    }

    logout(): any {
      localStorage.removeItem('username');
    }

    getUser(): any {
      return localStorage.getItem('username');
    }

    isLoggedIn(): boolean {
      return this.getUser() !== null;
    }
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
