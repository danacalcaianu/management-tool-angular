import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    create(user) {
        return this.http.post('http://localhost:3030/users/registration', user);
    }
}