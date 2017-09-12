import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
user={
  name:'Pankaj',
  email:'namo@gmail.com',
  password:'password'
}
  ngOnInit() {
  }
@ViewChild('form_') formData;
  submiForm(){
    
    console.log(this.formData);
  }
}
