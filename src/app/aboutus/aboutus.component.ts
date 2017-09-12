import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

 
 
   private data: Observable<Array<number>>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  constructor() {
    
   }
addanotherData(){
   this.data=new Observable<Array<number>>(observer=>{
 setTimeout(() => {
              observer.next([42,10,120]);
          }, 1000);

          setTimeout(() => {
              observer.next([42,11,12,110]);
          }, 2000);
     })
}
   addnewData(){
      let subscription = this.data.subscribe(
          value => {this.values=value;
            console.log(value);
        },
          error1 =>{ this.anyErrors = true;
          console.log('error');
          },
        () => {this.finished = true;
          console.log('complete');
        }
      );
console.log('Pankaj');
var bc=0;
     this.data=new Observable<Array<number>>(observer=>{
   
       console.log('Pankaj');

       for(var i=0;i<=100000000;i++){
           bc+=i;
       }
    
          observer.next([42,10,120]);
         

          setTimeout(() => {
              observer.next([42,11,12,110]);
          }, 2000);
     });
        console.log(bc);
   }
  ngOnInit() {

    this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next([42,10]);
          }, 1000);

          setTimeout(() => {
              observer.next([42,11,12]);
          }, 2000);

         
      });

    

      let subscription = this.data.subscribe(
          value => {this.values=value;
            console.log('next');
        },
          error1 =>{ this.anyErrors = true;
          console.log('error');
          },
        () => {this.finished = true;
          console.log('complete');
        }
      );
  }

}
