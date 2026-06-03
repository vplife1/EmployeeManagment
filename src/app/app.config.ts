import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
=======

import { routes } from './app.routes';
>>>>>>> c3e3efb7eac1a9bd416c55197f2aeb30a9f3fa31

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
=======
    provideRouter(routes)
>>>>>>> c3e3efb7eac1a9bd416c55197f2aeb30a9f3fa31
  ]
};
