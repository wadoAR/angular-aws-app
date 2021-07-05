import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AUTHENTICATED_USER, TOKEN} from '../authentication/service/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {
    }

    private static setAuthorization(request: HttpRequest<any>) {
        let requestWithAuthorization;
        if (!(localStorage.getItem(AUTHENTICATED_USER) && localStorage.getItem(TOKEN))) {
            return request;
        } else {
            requestWithAuthorization = request.clone({
                setHeaders: {
                    Authorization: localStorage.getItem(TOKEN)
                }
            });
        }
        return requestWithAuthorization;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestWithAuthorization = JwtInterceptor.setAuthorization(request);
        return next.handle(requestWithAuthorization);
    }
}
