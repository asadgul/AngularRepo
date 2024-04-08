import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpclient:HttpClient) {

    
   }
   GetRequest(){
    this.httpclient.get('https://localhost:7212/api/TaskManager/GetData').subscribe(response=>{
      console.log(response);
    })
   }
}
