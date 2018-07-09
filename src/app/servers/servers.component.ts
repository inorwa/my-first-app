import { Component, OnInit } from '@angular/core';
import {LogComponent} from '../log/log.component';


@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationsStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showDetails = false;

  detailsLogs:LogComponent[]  = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationsStatus = 'Server was created! Name is ' + this.serverName;
  }

  onDisplayDetails(){
    let log = new LogComponent();
    log.id = this.detailsLogs.length + 1;
    log.timestamp = new Date();
    if(this.showDetails){
      console.log('add details');
      this.detailsLogs.push();
      this.showDetails = false;
      log.message = "details disabled";

      console.log(log);
      this.detailsLogs.push(log);
    }else{
      console.log('add details');
      this.showDetails = true;
      log.message = "details enabled";

      console.log(log);
      this.detailsLogs.push(log);

    }
    console.log(this.detailsLogs);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
