import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from 'src/app/models/center';
import { CenterService } from 'src/app/services/center.service';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {
  center: Center = new Center();

  constructor(private centerService: CenterService,private router: Router) { }

  ngOnInit(): void {
  }
  saveCenter() {
    this.centerService.createCenter(this.center).subscribe(data=>{
      console.log(data);
      this.goToCenterList();
    },
    error => console.log(error));
  }

  goToCenterList() {
     this.router.navigate(['/centers'])

  }

  OnSubmit() {
    console.log(this.center);
    this.saveCenter();
  }


}
