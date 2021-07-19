import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiEndPoints } from '../enums/endpoints.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  dataURL = environment.apiUrl + ApiEndPoints.DATA;
  constructor(private http: HttpClient) { }

  get_data(): Observable<any> {
    return this.http.get<any>(this.dataURL, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json', Authorization: 'Bearer '
      })
    }).pipe(map((response: any) => response));
  }
}
