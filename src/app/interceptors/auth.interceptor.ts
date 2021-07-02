import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.loginService.getUserToken();
    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          'client-id': '2dry7yykx0qwet2wgtp4z1e94b5opj',
        },
      })
    );
  }
}
