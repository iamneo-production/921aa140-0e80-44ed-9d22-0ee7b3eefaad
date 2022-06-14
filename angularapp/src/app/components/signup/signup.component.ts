import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User=new User();
  signupForm!: FormGroup ;
  pattern=  "[6-9]\\d{9}";
  constructor(private signupService:SignupService) { 
    
  }

  userRegister(){
    console.log(this.user);
    this.signupService.registerUser(this.user).subscribe(data=>{
      Swal.fire(
        'Success',
        'User is registered',
        'success'
        
      )
    },error=>Swal.fire(
      'Oops!',
      'User is not registered',
      'error'
      
    ));
  }

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      adminoruser:new FormControl(null, [Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      username:  new FormControl(null,[Validators.required]),
      mobileNumber:  new FormControl(null,[Validators.required,Validators.pattern(this.pattern)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      confirmPassword: new FormControl(null,[Validators.required])
    },
    // {
    //   validators: this.MustMatch('password','confirmPassword')
    // }
    )
  }
  get email()
   {
     return this.signupForm.get('email');
   }
   get password()
   {
     return this.signupForm.get('password');
   }
   get adminoruser()
   {
     return this.signupForm.get('adminoruser');
   }
   get username()
   {
     return this.signupForm.get('username');
   }
   get mobileNumber()
   {
     return this.signupForm.get('mobileNumber');
   }
   get confirmPassword()
   {
     return this.signupForm.get('confirmPassword');
   }
   MustMatch(password: string, confirmPassword: string)
   {
     return (formgroup:FormGroup) =>{
       const p= formgroup.controls[password];
       const cp= formgroup.controls[confirmPassword];
       if(cp.errors && !cp.errors?.['MustMatch']){
         return
       }
       if(p.value !== cp.value)
       {
         cp.setErrors({MustMatch:true});
       }
       else
       {
         cp.setErrors(null);
       }
     }
   }

}
