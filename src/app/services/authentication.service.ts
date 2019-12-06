import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
  private authUrl:string;
  constructor(private httpclient:HttpClient) {
    this.authUrl="http://localhost:3000/auth/v1/";
  }

  authenticateUser(data) {
  return this.httpclient.post(this.authUrl,data);
  }

  setBearerToken(token) {
  return localStorage.setItem('bearerToken',token); 
  }

  getBearerToken() {
  return localStorage.getItem('bearerToken'); 
  }

  isUserAuthenticated(token): Promise<boolean> {
    return new Promise((resolve,reject)=>{
    this.httpclient.post('http://localhost:3000/auth/v1/isAuthenticated',{
    headers:{'Authorization':`${this.getBearerToken()}`}
    }).subscribe(res=>{
      //       console.log(res['isAuthenticated']);
    resolve(res['isAuthenticated']);
    },
    err=>{
    reject(err);
    })
    })
    
  }

  }
