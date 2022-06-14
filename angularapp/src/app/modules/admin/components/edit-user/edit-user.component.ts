import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User(); 
  editForm!: FormGroup;
  pattern= "[6-9]\\d{9}";
  id!: number;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
    this.editForm= new FormGroup({
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
  onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/viewUsers']);
  }
  get email()
   {
     return this.editForm.get('email');
   }
   get password()
   {
     return this.editForm.get('password');
   }
   get adminoruser()
   {
     return this.editForm.get('adminoruser');
   }
   get username()
   {
     return this.editForm.get('username');
   }
   get mobileNumber()
   {
     return this.editForm.get('mobileNumber');
   }
   get confirmPassword()
   {
     return this.editForm.get('confirmPassword');
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
