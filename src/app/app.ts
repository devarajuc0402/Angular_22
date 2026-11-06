import {Component, inject, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {HelpService} from './services/HelpService';
import {HelpResponse} from './model/HelpResponse';

@Component({
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.css',
    templateUrl: './app.html',
    imports: [JsonPipe]
})
export class App {
    private readonly helpService = inject(HelpService);
    helpMessage = signal<string>('');
    errorMessage = signal<string>('');
    helpList = signal<HelpResponse[]>([]);
    accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqU0RWWUZlMF9Xek1sUGlRSGo2TlkzajljNWh1WEViMDJ6TjZwZUZNMDFRIn0.eyJleHAiOjE3OTM5NjgxMDUsImlhdCI6MTc5Mzk2NjMwNSwianRpIjoib25ydHJvOmIyYWY0OTU4LTc2ZTctZjFmNy00MWYzLWMyYWI5YzY4M2NiZSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODE4MC9yZWFsbXMvbWljcm9zZXJ2aWNlcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzYTNhZGNlZS04ZDY0LTQ1ODctOTM4Yi1mMDFmYTMwN2FiMGIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtaWNyb3NlcnZpY2VzLWNsaWVudCIsInNpZCI6IjFJR1JXZEdmcWVqT3diSE5CZlVIY0taMiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZXMiLCJvZmZsaW5lX2FjY2VzcyIsIkFETUlOIiwiVVNFUiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidGVzdCB0ZXN0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdHVzZXIiLCJnaXZlbl9uYW1lIjoidGVzdCIsImZhbWlseV9uYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBub2VtYWlsLmNvbSJ9.XB42EcejnP0yD9X6QNAKgPvp0DG9oKiQrXQzLKyYho1ZRWlhQcI_swCkUUDWkIUJxrD5S08jv9HSRGPEobLaqCk0vBw3d6PApmo9KKY-N8aR0XVYcDpN3ZDOIrB7p9I_lKE4gWPitIQ_b2-2VUdqXzhWq84Dmeg6rMds5mPpWePjZO5C3bzzKKUGcXOPSgMtdNyU38FnAKFtM7s9YcuOxeVGouwKaT6X7YwGZg2j-_Knf-oL7raIf3YNQH1dpdA_XjWmy15zeXeSk0yF0MTbbgOwDitEmZp82Ri3xp_YjHfgxsUf104H8r71ixuFXTymbX74_R6QVe182v1yRt3o_A';

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
