import { Injectable } from '@angular/core';
import {Astronaut} from '../models/astronaut';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AstronautService {

  constructor(private http: HttpClient) { }

  getAstronauts(): Observable<Astronaut[]> {
    return this.http.get<Astronaut[]>(`${environment.apiUrl}astronaut/list`);
  }

  newAstronaut(data: object): Observable<Astronaut> {
    return this.http.post<Astronaut>(`${environment.apiUrl}astronaut`, data);
  }
}
