import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from 'src/app/models/center';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-center-profile',
  templateUrl: './center-profile.component.html',
  styleUrls: ['./center-profile.component.css']
})
export class CenterProfileComponent implements OnInit {
  title='List of centers';

  centers!: Center[];

  constructor(private centerService: CenterService,private router: Router) { }

  ngOnInit(): void {
    this.getCenters();
  }   
  
  private getCenters(){
    this.centerService.getCentersList().subscribe(data =>{
      this.centers=data;
    });
  }

   centerDetails(id: number) {
     this.router.navigate(['center-details', id]);
  }
  updateCenter(id: number) {
    this.router.navigate(['update-center', id ]);
 }
   deleteCenter(id: number) {
    this.centerService.deleteCenter(id).subscribe(data => {
      alert("Successfully user is deleted")
       console.log(data);
      this.getCenters();
     },error=>alert("Sorry user not loggedin"));
  }
  


}
