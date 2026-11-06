import {HttpClient, HttpHeaders} from '@angular/common/http';
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

    getHelpList(accessToken: string): Observable<HelpResponse[]> {

      const headers = this.authHeaderService.getHeaders(accessToken);
      const endPoint = '/list';

      return this.http.get<HelpResponse[]>(`${this.apiUrl}${endPoint}`, {
        headers
      });
    }
}
