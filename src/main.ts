import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import {provideRouter} from '@angular/router';
import {route_config} from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(route_config)],
}).catch((err) => console.error(err));