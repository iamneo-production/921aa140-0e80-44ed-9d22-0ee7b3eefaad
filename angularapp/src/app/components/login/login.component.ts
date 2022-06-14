import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  loginForm!: FormGroup;
  constructor(private loginService:LoginService,private http:HttpClient,private auth:AuthService,private router:Router) { }

  userLogin(){
    // console.log(this.user);
    // this.loginService.loginUser(this.user).subscribe(data=>{
    //   alert("Successfully user is loggedin")
    // },error=>alert("Sorry user not loggedin"));
    // ---------
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
  

  ngOnInit(): void {
    this.loginForm= new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(5)])
  });
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }
  get email()
   {
     return this.loginForm.get('email');
   }
   get password()
   {
     return this.loginForm.get('password');
   }


}
