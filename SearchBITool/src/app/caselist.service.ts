import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CaselistService {

  private _url: string ="http://localhost/dvnew/api/v1"

  // private id = this.routing.snapshot.paramMap.get('id');

  constructor(private http: HttpClient,private routing :ActivatedRoute) {  }
  
  
  getCases():Observable <User[]>{

    return this.http.get<User[]>(this._url+'/users');
  }

  getCasesId(input_data):Observable <User[]>{

    // console.log(input_data); 
    return this.http.get<User[]>(this._url+'/users/'+input_data[1]);
  }

  
  
}
