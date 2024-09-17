import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
window.AudioContext = window.AudioContext;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
