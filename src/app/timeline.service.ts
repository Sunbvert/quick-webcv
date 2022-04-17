import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CV } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  cvUrl = "assets/cv.json";

  constructor(private http: HttpClient) { }

  getCV () {
    return this.http.get<CV>(this.cvUrl);
  }
}
