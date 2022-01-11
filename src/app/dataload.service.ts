import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

import { map } from 'rxjs/operators';


@Injectable()
  export class DataloadService {

    constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('https://frontend-take-home.fetchrewards.com/form').pipe(map(data => data));
    }

    SubmitData(data: any) {
      return this.http.post('https://frontend-take-home.fetchrewards.com/form', data);
    }

    

  }