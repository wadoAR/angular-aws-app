import {Injectable} from '@angular/core';
import {Properties} from './properties';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LabelValue} from '../models/utility/label-value';

@Injectable({
    providedIn: 'root'
})
export class LabelValueService {

    host = Properties.host;

    constructor(private httpClient: HttpClient) {
    }

    getRoles(): Observable<LabelValue[]> {
        return this.httpClient.get<LabelValue[]>(this.host + '/list/roles');
    }
}
