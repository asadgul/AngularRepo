import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projects } from './projects';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpclient:HttpClient) {
    
   }
  public GetRequest():Observable<Projects[]>{
    return this.httpclient.get<Projects[]>('https://localhost:7212/api/TaskManager/GetData');
   }
}
