import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const reqCopy = request.clone({
      setHeaders: {
        "Authorization": `Bearer someDummyToken`,
        "username": "kgovardhan409"
      }
    })
    console.log("REQUEST ",reqCopy);
    return next.handle(reqCopy);
  }
}
