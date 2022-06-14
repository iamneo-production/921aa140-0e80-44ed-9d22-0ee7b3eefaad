import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  
  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,private router:Router) { }

  ngOnInit(): void {
  }
  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe( data =>{
      console.log(data);
      //this.goToAppointmentList();
    },
    error => console.log(error));
  }

  goToAppointmentList(){
    this.router.navigate(['/my-bookings']);
  }
  
  onSubmit(){
    console.log(this.appointment);
    this.saveAppointment();
  }
}
