import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { APIConfig } from 'src/app/APIConfig';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  JwtToken: any;
  constructor(private http: HttpClient) {
    this.JwtToken = localStorage.getItem('apitoken');
  }

  GetAllCourse() : Observable<any>{
    let url = APIConfig.baseUrl + '/UserCourse/GetAll';
    let header = new HttpHeaders({
      'Authorization': 'Bearer '+this.JwtToken
    });
    return this.http.get(url,{headers:header});
  }

  GetCourseFilter(technology:any, fromduration:any, toduration:any) : Observable<any>{
    let url = "";
    if(technology === "" && fromduration === "" && toduration ===  "") {
      url = APIConfig.baseUrl + '/UserCourse/GetAll';
    }
    else if(fromduration === "" || fromduration === null || toduration ===  "" || toduration === null) {
      url = APIConfig.baseUrl + '/Course/Info?technology='+technology;
    }
    else{
      url = APIConfig.baseUrl + '/Course/Get?technology='+technology + '&fromDuration='+fromduration+'&toDuration='+toduration;
    }
    
    let header = new HttpHeaders({
      'Authorization': 'Bearer '+this.JwtToken
    });
    return this.http.get(url,{headers:header});
  }
}
