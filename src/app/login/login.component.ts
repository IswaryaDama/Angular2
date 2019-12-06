import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = new FormControl();
    password = new FormControl();
    //loginForm:FormGroup;
    userObj: User;
    submitMessage: string;
    constructor(private authservice:AuthenticationService,private formbuilder:FormBuilder,private routerservice:RouterService) 
    { 
      this.userObj = new User();
      this.submitMessage = '';
      //this.loginForm = formbuilder.group({
       // username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
       // password:['',Validators.compose([Validators.required,Validators.minLength(3)])]
      //})
    }
  
    ngOnInit() {
    }
  
    loginSubmit()
    {
      this.userObj.username = this.username.value;
      this.userObj.password = this.password.value;
      console.log(this.userObj.username);
      console.log(this.userObj.password);
  
      this.authservice.authenticateUser(this.userObj).subscribe(res=>{
  
        console.log("token: "+res['token']);
        this.authservice.setBearerToken(res['token']);
        this.routerservice.routeToDashboard();
      },err=>{
        this.submitMessage = err.message;
        if(err.status === 403){
          this.submitMessage = 'Unauthorized';
        }
        else{
          this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found';
        }
        console.log("erroe is " + err);
      })
    }
  } 
    
