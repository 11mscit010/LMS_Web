import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConfig } from '../APIConfig';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  UserLogin(data:any) : Observable<any>{
    let url = APIConfig.baseUrl + '/User/Login';
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url,data,{headers:header, responseType: 'text'});
  }
  
  UserRegister(data:any) : Observable<any>{
    let url = APIConfig.baseUrl + '/User/Register';
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url,data,{headers:header, responseType: 'text'});
  }
}
