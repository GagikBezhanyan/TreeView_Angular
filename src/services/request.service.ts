import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url: string = environment.apiUrl + environment.dataUrl;

  constructor(private http: HttpClient) { }

  getData<Type>() {
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.http.get<Type>(this.url, {headers: header});
  }

}
