import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {AuthenticationService} from './authentication/service/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'IAM';
    public loggedInUser: boolean;

    constructor(private primengConfig: PrimeNGConfig,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        this.authenticationService.loggedInUser.subscribe(loggedInUser => this.loggedInUser = loggedInUser);
    }

}
