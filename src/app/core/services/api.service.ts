import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = environment.baseurl;
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    });
  }

  postData(url: any, value: any, isTokenRequired: any, responseType?:any) {
    let options:any = {
      headers: this.httpHeaders
    };
    if(responseType){
      options['observe'] ='response'
      options['responseType'] = responseType
    }
    console.log(options);

    if (isTokenRequired) {
      return this.http.post<any>(this.baseUrl + url, value, options);
    }
    else return this.http.post<any>(this.baseUrl + url, value);
  }

  getData(url: any, isTokenRequired: any) {
    if (isTokenRequired) {
      return this.http.get<any>(this.baseUrl + url, {
        headers: this.httpHeaders
      });
    }
    else return this.http.get<any>(this.baseUrl + url);
  }

  putData(url: any, value: any, isTokenRequired: any) {
    if (isTokenRequired) {
      return this.http.put<any>(this.baseUrl + url, value, {
        headers: this.httpHeaders
      });
    }
    else return this.http.put<any>(this.baseUrl + url, value);
  }

  deleteData(url: any, isTokenRequired: any) {
    if (isTokenRequired) {
      return this.http.delete<any>(this.baseUrl + url, {
        headers: this.httpHeaders
      });
    }
    else return this.http.delete<any>(this.baseUrl + url);
  }


}
