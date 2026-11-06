import {Injectable} from '@angular/core'
import {HttpHeaders} from '@angular/common/http'

@Injectable ({
  providedIn: 'root'
})
export class AuthHeaderService {

  getHeaders(accessToken: string) : HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
    });
  }
}
