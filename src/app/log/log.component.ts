import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  id: number = 0;
  message: string = '';
  timestamp: Date = new Date();

  constructor(id:number,timestamp:Date,message:string) {
    this.id = id;
    this.timestamp = timestamp;
    this.message = message;
  }

  ngOnInit() {
  }

  toString(){
    return this.timestamp.toLocaleTimeString() + ":" + this.message;
  }

}
