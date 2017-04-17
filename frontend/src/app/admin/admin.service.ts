import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../shared/user';

@Injectable()
export class AdminService {
    
    private url:string = "http://localhost:5000/admin/";
    
    constructor(private http: Http) { }

    register(user:User){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'addUser',user)
            .map((response:Response) => response.json());
    }

    getAllUsers(){
        return this.http.get(this.url+'users')
            .map((response:Response) => response.json());
    }

    search(searchText:string){
        console.log('search string '+searchText);
        return this.http.get(this.url+'users/'+searchText)
            .map((response:Response) => response.json());
    }
}