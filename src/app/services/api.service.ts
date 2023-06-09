import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../models/Response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  post(url: string, params?: object, options?: object): Observable<Response> {
    return this.http.post(`${environment.endpoint}${url}`, params, options);
  }

  get(url: string, params?: any): Observable<Response> {
    let httpParams = new HttpParams();
    if (params) {
      httpParams = httpParams.appendAll(params);
    }
    return this.http.get(`${environment.endpoint}${url}`, {
      params: httpParams
    });
  }
}
