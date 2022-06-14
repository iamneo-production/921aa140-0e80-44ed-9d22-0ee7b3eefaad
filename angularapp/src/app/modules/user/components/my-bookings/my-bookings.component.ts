import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  appointments!:Appointment[];
  constructor(private appointmentService:AppointmentService,private router:Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  private getAppointments() {
    this.appointmentService.getAppointmentsList().subscribe(data=>{
      this.appointments=data;
    });
  }
  appointmentDetails(id: number) {
    this.router.navigate(['my-bookings', id]);
 }
 updateAppointment(id: number) {
   this.router.navigate(['update-appointment', id ]);
}
  deleteAppointment(id: number) {
   this.appointmentService.deleteAppointment(id).subscribe(data => {
     alert("Successfully deleted")
      console.log(data);
     this.getAppointments();
    },error=>alert("Sorry "));
 }
 


}
