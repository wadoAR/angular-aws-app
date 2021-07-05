import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user/user';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user = new User();
    private loggedInUser: boolean;

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.authenticationService.loggedInUser.subscribe(loggedInUser => this.loggedInUser = loggedInUser);
        if (this.loggedInUser) {
            this.router.navigate(['/home']).then();
        }
    }

    authenticate() {
        this.authenticationService.authenticateUser(this.user).subscribe(res => {
            this.router.navigate(['/home']).then();
        });
    }
}
