import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  private restUrl: string = "";

  constructor(private http: HttpClient){}

  

    /*getPdf(): Observable<string>{
      return this.http.get<string>('http://localhost:8080/api/pdf');
    }*/

    //this.restUrl = 'http://localhost:8080/api/pdf';
}
