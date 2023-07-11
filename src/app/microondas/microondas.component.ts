import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {
  public state = false;
  public min: number = 0;
  public sec: number = 0;
  public total: number = this.min * 60 + this.sec;
  public secLegacy: number = 0;

  transform(number: number): void {
    let min = this.min;
    let sec = this.sec;

    if (sec < 60) {
      sec = sec * 10 + number;
    }
    if (sec < 100) {  
      min = min * 10 + Math.floor(sec / 60);
      sec %= 60;
    } else {
      min = min * 10 + Math.floor(sec / 100);
      sec %= 100;
      if(sec >= 60){
        min += Math.floor(sec / 60);
        sec %= 60;
      }
    }

    if (min.toString().length < 3) {
      this.min = min;
      this.sec = sec;
    }
  }

  add30Seconds(){
    this.sec = this.sec + 30;
    if(this.sec >= 60){
      this.min += Math.floor(this.sec / 60);
      this.sec %= 60;
    }
    if(!this.state){
      this.state = true;
      this.turnOn();
    }
  }

  add01Minute(){
    this.min += 1;
    if(!this.state){
      this.state = true;
      this.turnOn();
    }
  }

  
  turnOn() {
    this.state = true;
    setInterval(() => {
      if (this.state && this.sec > 0 || this.min > 0) {
        this.sec -= 1;
        if (this.sec === -1 && this.min > 0) {
          this.min -= 1;
          this.sec = 59;
        }
        if (this.sec <= 0 && this.min <= 0) {
          this.state = false;
          clearInterval;
        }
      }
    }, 1000);

  }

  turnOff() {
    if (this.state) {
      this.state = false;
      clearInterval;
    } else {
      this.sec = 0;
      this.min = 0;
    }
  }

}








