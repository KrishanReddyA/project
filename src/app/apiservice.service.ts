import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dummydata } from './dummydata';
import { Postdata } from './postdata';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getdata():Observable<Dummydata[]>{
    const url ="https://jsonplaceholder.typicode.com/comments";
    return this.http.get<Dummydata[]>(url)
  }

  postdata():Observable<Postdata[]>{
    const url ="https://jsonplaceholder.typicode.com/posts";
    return this.http.get<Postdata[]>(url)
  }
}
