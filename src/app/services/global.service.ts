import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map, Observable} from "rxjs";
import {Response} from "../models/Response";
import {Art} from "../models/art";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private apiService: ApiService,
  ) { }

  uploadImage(params: Object): Observable<{ response: string }>{
    console.log(params);
    return this.apiService.post('?imageUpload=1', params).pipe(
        map((res: Response) => res.data.response)
      );
  }

  getImages(): Observable<Art[]>{
    return this.apiService.get('?getImages=1').pipe(
      map((res: Response) => res.data.map((image: any) => new Art().prepare(image)))
    );
  }
}
