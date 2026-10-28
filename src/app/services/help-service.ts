import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class HelpService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/api/help/message';

    getMessage(): Observable<String> {
        return this.http.get(this.apiUrl, {
            responseType: 'text',
        });
    }
}
