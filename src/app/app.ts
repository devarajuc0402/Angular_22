import {Component, inject, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HelpService} from './services/HelpService';
import {HelpResponse} from './model/HelpResponse';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.css',
    templateUrl: './app.html',
    imports: [JsonPipe, FormsModule]
})
export class App {
    private readonly helpService = inject(HelpService);
    helpMessage = signal<string>('');
    errorMessage = signal<string>('');
    helpList = signal<HelpResponse[]>([]);
    helpRequestParamId: number | null = null;
    helpIdRequestResponse = signal<HelpResponse[] | null>(null);
    helpPathVariableId: number | null = null;
    helpIdPathResponse = signal<HelpResponse[] | null>(null);
    helpStartId: number | null = null;
    helpEndId: number | null = null;
    helpIdLimitResponse = signal<HelpResponse[] | null>(null);
    accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqU0RWWUZlMF9Xek1sUGlRSGo2TlkzajljNWh1WEViMDJ6TjZwZUZNMDFRIn0.eyJleHAiOjE3OTM5NzQ1MjYsImlhdCI6MTc5Mzk3MjcyNiwianRpIjoib25ydHJvOmU1M2M4ZGE5LWIwNWUtZmE3Ni1lZDYyLTMxYTdlNTk1YzdmZCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODE4MC9yZWFsbXMvbWljcm9zZXJ2aWNlcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzYTNhZGNlZS04ZDY0LTQ1ODctOTM4Yi1mMDFmYTMwN2FiMGIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtaWNyb3NlcnZpY2VzLWNsaWVudCIsInNpZCI6ImcyQ3dPMkxWc1dDTjVXMUpSYlZ6N0pjbyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZXMiLCJvZmZsaW5lX2FjY2VzcyIsIkFETUlOIiwiVVNFUiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidGVzdCB0ZXN0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdHVzZXIiLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBub2VtYWlsLmNvbSJ9.ali_4cbVld1L4w9Ildg3XY-F8Gq1oqRa0baE3u21eATRPxIGtvWbisBigXReRBXDTy4XWvqYpqD73ulfBgWXwWr6GcX9zHl9rJD14Cv5b07u40EY3xVtNZQv-oU5ymkDlPA01A5nYCMrsj9QlgJzkP6l4vwNjGEQRxa_u1qNUy7-cH5hshKblYm6cNxxDfn3hj89MuR4WDCFuPuGpfUdkHDGPKKZtrn2BksGh9599mXIjivhptleSuwPklOdwPnA9XVyv8uK3_w5WsPIZrRhnagXe5vwLy1uBD6xX_6-CTmU9kFbiDpIjDBy8FHl6ttXXmtunHKnQFX2tvD7ewpKpg';

    getHelpMessage(): void {
      console.log("Help Message Button Clicked");
      this.helpMessage.set('');
      this.errorMessage.set('');

      this.helpService.getMessage(this.accessToken).subscribe({
        next: (response) => {
          this.helpMessage.set(response)
        },
        error: (error) => {
          this.errorMessage.set(`API request failed: ${error.status} ${error.statusText}`);
        },
      });
    }

    getHelpByRequestParamId(): void {
        console.log("Help Request Param By Id Button clicked");

        if(this.helpRequestParamId == null) {
          console.log("Please enter the Help ID")
          return;
        }
        this.helpService.getHelpByRequestParamId(this.accessToken, this.helpRequestParamId)
          .subscribe({
            next: (response) => {
              this.helpIdRequestResponse.set(response)
            },
            error: (error) => {
              this.errorMessage.set(`Help Request Param By Id API request failed: ${error.status} ${error.statusText}`);
            }
        });
      }

    getHelpByPathVariable(): void {
      console.log("Help Path Variable By Id Button clicked");

      if(this.helpPathVariableId == null) {
        console.log("Please enter the Help ID")
        return;
      }
      this.helpService.getHelpByPathVariable(this.accessToken, this.helpPathVariableId)
        .subscribe({
          next: (response) => {
            this.helpIdPathResponse.set(response)
          },
          error: (error) => {
            this.errorMessage.set(`Help Path Variable By Id API request failed: ${error.status} ${error.statusText}`);
          }
      });
    }

    getHelpRange(): void {
      console.log("Help Range Param By Start and End Id Button clicked");

      if(this.helpStartId == null) {
        console.log("Please enter the Help Start ID")
        return;
      }
      if(this.helpEndId == null) {
        console.log("Please enter the Help End ID")
        return;
      }
      this.helpService.getHelpRange(this.accessToken, this.helpStartId, this.helpEndId)
        .subscribe({
          next: (response) => {
            this.helpIdLimitResponse.set(response)
          },
          error: (error) => {
            this.errorMessage.set(`Help Request Param By Id API request failed: ${error.status} ${error.statusText}`);
          }
      });
    }

      getHelpList(): void {
        console.log("Help List Button clicked");

        this.helpService.getHelpList(this.accessToken).subscribe({
          next: (response) => {
            this.helpList.set(response)
          },
          error: (error) => {
            this.errorMessage.set(`Help List API request failed: ${error.status} ${error.statusText}`);
          }
        });
      }
  }
