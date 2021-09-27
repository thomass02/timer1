import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//main class
export class AppComponent implements OnInit{
  title = 'timer1';

  // default constructor
  constructor() {
  }

  // placeholder for "on initiation"
  ngOnInit(): void {
  }

  //minDate = new Date();
  //maxDate = new Date(2015,1,1);

  start: any;
  // hard coded time for testing
  countDown = new Date("September 30, 2021 17:20:00").getTime();

  //event array for testing changes made to datepicker
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<unknown, unknown | null>) {
    this.events.push(`${type}: ${event.value}`);
    //let eventDate = new Date(this.events.push(`${event.value}`));
    //console.log(eventDate);
    console.log(this.events.push(`${event.value}`));
  }

  // convert event time into days, hours, min and seconds
  timer:any;
  x = setInterval(()=>{
    var now = new Date().getTime();
    var interval = this.countDown - now;
    var days = Math.floor(interval/(1000*60*60*24));
    var hours = Math.floor((interval % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((interval % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((interval % (1000*60)) / 1000);
    this.timer = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    //for testing
    //console.log(now);
    //console.log(this.countDown);

    // if interval duration is negative, the event is passed - display
    if(interval < 0){
      clearInterval(this.x);
      this.timer= 'The event has passed'
    }
  })
}
