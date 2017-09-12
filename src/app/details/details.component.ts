
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  inputs:['extra12'],
  host:{
    "(click)": "callFun($event)"
  }
})
export class DetailsComponent implements OnInit {

  constructor() { }
 extra12:string="initial adata";
@Output() emailregister = new EventEmitter<string>();  
@ViewChild('divchange') divchange:ElementRef;
value:boolean=true;
  ngOnInit() {
  }
callFun(event){
  if(event.path[0].className.indexOf("namo")>0){
this.divchange.nativeElement.className='alert alert-success namo';
  }
 
else{
  this.divchange.nativeElement.className='alert alert-warning namo';
}
  }
}
