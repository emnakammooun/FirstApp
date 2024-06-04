import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvtService {

  constructor(private httpClient:HttpClient) { }

  Get():Observable<Event[]>

  {
    //envoyer une requete http vers jason server (GET)
    return this.httpClient.get<Event[]>('http://localhost:3000/evt');
  }

  Post(evt:any):Observable<any>
  {
    return this.httpClient.post('http://localhost:3000/evt',evt);
  }

  OnGetID(id:string):Observable<Event>
  {
    return this.httpClient.get<Event>(`http://localhost:3000/evt/${id}`);
  }
}
