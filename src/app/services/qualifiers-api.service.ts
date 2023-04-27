import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Qualifiers } from 'src/app/models/qualifiers';

@Injectable({
  providedIn: 'root'
})
export class QualifiersApiService {
  private API_URL = require('../../package.json').API_URL;

  constructor(private http: HttpClient) { }

  getQualifiers(): Observable<Qualifiers[]> {
    const URL = `${this.baseURL}/api/message/qualifiers`;
    return this.http.get<Qualifiers[]>(URL)
  }
}
