import {Component, inject, signal} from '@angular/core';
import {HelpService} from './services/help-service';

@Component({
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    private readonly helpService = inject(HelpService);
    helpMessage = signal<string>('');
    errorMessage = signal<string>('');
    accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqU0RWWUZlMF9Xek1sUGlRSGo2TlkzajljNWh1WEViMDJ6TjZwZUZNMDFRIn0.eyJleHAiOjE3OTM1MTg2MDQsImlhdCI6MTc5MzUxNjgwNCwianRpIjoib25ydHJvOjdjNDBkMWI3LTJhYzYtODc1ZC03ZWI1LWY0OTVjZjk0NjA3ZSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODE4MC9yZWFsbXMvbWljcm9zZXJ2aWNlcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzYTNhZGNlZS04ZDY0LTQ1ODctOTM4Yi1mMDFmYTMwN2FiMGIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtaWNyb3NlcnZpY2VzLWNsaWVudCIsInNpZCI6IkpOOGFIcUE1LWVISWticVVDRDAtQVdFRSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZXMiLCJvZmZsaW5lX2FjY2VzcyIsIkFETUlOIiwiVVNFUiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidGVzdCB0ZXN0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdHVzZXIiLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBub2VtYWlsLmNvbSJ9.CUyTmcfBNWQbToOy4He836l7zhSU8VKItiIic8RYA38valMfHMipX7YA8JSOfAwA0CM8PZo7KMCoFPRI76mRB8k1P9Fu8p7gCpWz6iXQ0KOydlFfL9fW2H9jH4hSq6LpTXWNbT0gANSuqhq7mzCIVDV65fMbct_ZIWPWVVXsg77ILIoaSce4Qsfje0Joq6uU7piXKdqH-VOrjUSiwj9vbawnR8MUlMXjXVfELXE03goWGVP-Cr8iXW-hCWKpNA9NtGs0obgvnjcZjPwbQDN-xSWVDPTwslPaRU2MxgcrnZc3LZuEAsRftWY--87BlIkip8RmZ2UuURAexSgktgLZHw';

    getHelpMessage(): void {
          console.log("Button Clicked");
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
  }
