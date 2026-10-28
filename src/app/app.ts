import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {inject} from '@angular/core';
import {HelpService} from './services/help-service';

@Component({
    imports: [RouterOutlet],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('angular-22-ui');

    private readonly helpService = inject(HelpService);
}
