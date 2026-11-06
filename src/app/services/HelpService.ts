import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {HelpResponse} from './../model/HelpResponse';
import {AuthHeaderService} from './AuthHeaderService';

@Injectable({providedIn: 'root'})
export class HelpService {
    private readonly http = inject(HttpClient);
    private readonly authHeaderService = inject(AuthHeaderService);
    private readonly apiUrl = 'http://localhost:8080/api/help';

    getMessage(accessToken: string): Observable<string> {

        const headers = this.authHeaderService.getHeaders(accessToken);
        const endPoint = '/message';

        return this.http.get(`${this.apiUrl}${endPoint}`, {
            responseType: 'text',
            headers
        });
    }

    getHelpByRequestParamId(accessToken: string, helpId: number): Observable<HelpResponse[]> {

      const headers = this.authHeaderService.getHeaders(accessToken);
      const params = new HttpParams().set('helpId', helpId)
      const endPoint = '/id';

      return this.http.get<HelpResponse[]>(`${this.apiUrl}${endPoint}`, {
        headers,
        params
      });
    }

    getHelpByPathVariable(accessToken: string, helpId: number): Observable<HelpResponse[]> {

      const headers = this.authHeaderService.getHeaders(accessToken);
      const endPoint = `/id/${helpId}`;

      return this.http.get<HelpResponse[]>(`${this.apiUrl}${endPoint}`, {
        headers
      });
    }

    getHelpRange(accessToken: string, helpStartId: number, helpEndId: number): Observable<HelpResponse[]> {

      const headers = this.authHeaderService.getHeaders(accessToken);
      const params = new HttpParams().set('startHelpId', helpStartId).set('endHelpId', helpEndId)
      const endPoint = `/id/range`;

      return this.http.get<HelpResponse[]>(`${this.apiUrl}${endPoint}`, {
        headers,
        params
      });
    }

    getHelpList(accessToken: string): Observable<HelpResponse[]> {

      const headers = this.authHeaderService.getHeaders(accessToken);
      const endPoint = '/list';

      return this.http.get<HelpResponse[]>(`${this.apiUrl}${endPoint}`, {
        headers
      });
    }
}
