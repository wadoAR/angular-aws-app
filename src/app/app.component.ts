import {Component, OnInit} from '@angular/core';
import {FilterMatchMode, PrimeNGConfig} from 'primeng/api';
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
        this.primengConfig.filterMatchModeOptions = {
            text: [
                FilterMatchMode.CONTAINS
            ],
            numeric: [
                FilterMatchMode.EQUALS,
                FilterMatchMode.LESS_THAN,
                FilterMatchMode.GREATER_THAN,
            ],
            date: [
                FilterMatchMode.DATE_IS,
                FilterMatchMode.DATE_BEFORE,
                FilterMatchMode.DATE_AFTER
            ]
        };
    }

}
