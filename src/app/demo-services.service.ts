import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DemoServicesService {

  list:Number[]=[10,11]
  constructor() { }
  eventData:EventEmitter<Number[]>=new EventEmitter<Number[]>();
  pushedData(data:number){
    this.list.push(data);
    this.eventData.emit(this.list);
  }

  getData(){
    return this.list;
  }

}
