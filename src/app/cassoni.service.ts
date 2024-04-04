import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cassoni } from './gestionecassoni/cassoni';

@Injectable({
  providedIn: 'root'
})
export class CassoniService {

  private url = "http://192.168.1.112:8090/api/response";
  private uri = "http://192.168.1.112:8090/api/cassone";

  constructor(private http: HttpClient) { }

  getData(): Observable<Cassoni[]>{
    return this.http.get<Cassoni[]>(this.url)
  }


}
