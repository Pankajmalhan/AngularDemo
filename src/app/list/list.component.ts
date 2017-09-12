
import { Component, OnInit } from '@angular/core';
import { DemoServicesService } from "app/demo-services.service";
import 'rxjs/Rx';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private demoServic:DemoServicesService) { }
  list:Number[];
  ngOnInit() {
this.list=  this.demoServic.getData();
this.demoServic.eventData.subscribe(
  data=>{this.list=data}
)
  }

}
