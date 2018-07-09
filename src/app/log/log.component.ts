import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  id: number = 0;
  message: string = 'uuu';
  timestamp: Date = new Date(0);

  ngOnInit() {
  }
  /*
  toString(){
    return this.timestamp.toLocaleTimeString() + ":" + this.message;
  }
  */

}
