import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Properties} from '../../utils/properties';
import {map} from 'rxjs/operators';
import {User} from '../../models/user/user';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const AUTHENTICATED_USER_ROLE = 'authenticatedUserRole';
export const AUTHENTICATED_USER_ID = 'authenticatedUserID';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private host = new Properties().host;
    public loggedInUser: Observable<any>;
    private loggedInUserSubject: BehaviorSubject<any>;
    private readonly token;
    private payload;

    constructor(private httpClient: HttpClient) {
        this.loggedInUserSubject = new BehaviorSubject<any>(localStorage.getItem(AUTHENTICATED_USER));
        this.loggedInUser = this.loggedInUserSubject.asObservable();
        this.token = localStorage.getItem(TOKEN);
        if (this.token) {
            this.payload = atob((this.token).split('.')[1]);
        }
    }

    public isUserAuthenticated(): boolean {
        let token = localStorage.getItem(TOKEN);
        if (!token) {
            return false;
        }
        token = token.replace('Bearer ', '');
        const jwtHelper = new JwtHelperService();
        return !jwtHelper.isTokenExpired(token);
    }

    public get currentUserRole(): any {
        return localStorage.getItem(AUTHENTICATED_USER_ROLE);
    }

    public get currentUserId(): any {
        return localStorage.getItem(AUTHENTICATED_USER_ID);
    }

    authenticateUser(user: User) {
        return this.httpClient.post<any>(this.host + '/user/login', user).pipe(map(
            data => {
                localStorage.setItem(AUTHENTICATED_USER, user.email);
                return this.processTokenResult(data);
            }
        ));
    }

    private processTokenResult(data): any {
        const tokenData = atob((data.token).split('.')[1]);
        localStorage.setItem(TOKEN, `Bearer ${data.token}`);
        localStorage.setItem(AUTHENTICATED_USER_ID, JSON.parse(tokenData).ID_CLAIM);
        localStorage.setItem(AUTHENTICATED_USER_ROLE, JSON.parse(tokenData).ROLE_CLAIM);
        this.loggedInUserSubject.next(data);
        return data;
    }

    logout() {
        localStorage.clear();
        this.loggedInUserSubject.next(null);
    }
}
