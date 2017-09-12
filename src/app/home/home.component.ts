import { log } from 'util';
import Colors from '../../enums/data';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DemoServicesService } from "app/demo-services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private demoServic:DemoServicesService) { }

  ngOnInit() {
  }
 title = 'app works!';
  data:number=10;
  color=Colors;
  @Input('pankaj') demo:string="hello";
  @ViewChild('demotext') demotext:HTMLElement;
  callFun(){
   this.demoServic.pushedData(this.data);
  }
submitData(){
  alert('Data Submitted');
}  
}
