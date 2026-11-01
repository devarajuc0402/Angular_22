import {Component, inject} from '@angular/core';
import {HelpService} from './services/help-service';

@Component({
    selector: 'app-root',
    standalone: true,
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    private readonly helpService = inject(HelpService);
    helpMessage = '';
    errorMessage = '';
    accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqU0RWWUZlMF9Xek1sUGlRSGo2TlkzajljNWh1WEViMDJ6TjZwZUZNMDFRIn0.eyJleHAiOjE3OTMxOTc3NTMsImlhdCI6MTc5MzE5NTk1MywianRpIjoib25ydHJvOjZlMDQ4Njc3LTBiZjgtNWIxYi1hMzU2LTA3MTZjOTI0MzNhNyIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODE4MC9yZWFsbXMvbWljcm9zZXJ2aWNlcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzYTNhZGNlZS04ZDY0LTQ1ODctOTM4Yi1mMDFmYTMwN2FiMGIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtaWNyb3NlcnZpY2VzLWNsaWVudCIsInNpZCI6Ild0aTVSWHY1YUhJbWpWU0NzYWtIOUJKeCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1taWNyb3NlcnZpY2VzIiwib2ZmbGluZV9hY2Nlc3MiLCJBRE1JTiIsIlVTRVIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6InRlc3QgdGVzdCIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3R1c2VyIiwiZ2l2ZW5fbmFtZSI6InRlc3QiLCJmYW1pbHlfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAbm9lbWFpbC5jb20ifQ.DlpcYwd-6d1BoOqTRkxZR9QK0oQb38403IJuWjWufjBq-HcxVrISWrMYZqAD2oeFaGoB3BRRFoNWG300bPI9vFm2CTRCH0T1A87vCs50I7YU2bj6GphfIRPziBHC7pxbpPTWe2eaCKMXBoOQ4EfEGgDVAtif8oP-Ta0JQ3o8WHgq6VAvXF0bbb3NWgt8pGfxpBoKfLY7pD0-mBoCP1rIFMz6jhvRnU2XyWhqccw0Bxsg9iL1SObzofIk5ZsfRXuqVZ2N68skvV1Hg43RUvqrX2C-r_5vmwLyC4iQx8IYTO6zWDqtX3AOIhA8aQD52B4vjCt9roFP06Zfctaf67v-fQ';

    getHelpMessage(): void {
          console.log("Button Clicked");
          this.helpMessage = '';
          this.errorMessage = '';

          this.helpService.getMessage(this.accessToken).subscribe({
              next: (response) => {
                  this.helpMessage = response;
              },
              error: (error) => {
                  this.errorMessage = `API request failed: ${error.status} ${error.statusText}`;
              },
          });
      }
  }
