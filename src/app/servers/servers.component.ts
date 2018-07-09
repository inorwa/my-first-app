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

  detailsLogs  = [];

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
    var  date = new Date();
    if(this.showDetails){
      this.detailsLogs.push(new LogComponent(this.detailsLogs.length + 1,date,"details disabled")  );
      this.showDetails = false;
    }else{
      this.detailsLogs.push(new LogComponent(this.detailsLogs.length + 1,date,"details enabled")  );
      this.showDetails = true;
    }
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
