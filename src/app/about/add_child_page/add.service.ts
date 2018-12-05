import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL:string = 'http://localhost:3000';

@Injectable()
export class LoginService {
  id:string;
  constructor(private http: HttpClient) {}
  
    getData()
    {
      return this.http.get(`${API_URL}/details`);
    }
    getData_User()
    {
      return this.http.get(`${API_URL}/users`);
    }

    getData_edit(id)
    {
      return this.http.get(`${API_URL}/details/` + `${id}`);
    }

    insertData(data) {
      return this.http.post(`${API_URL}/details`, data);
    }
    
    insertData_User(data) {
      return this.http.post(`${API_URL}/users`, data);
    }
    
    putUpdateMethod(details) {
      return this.http.put(`${API_URL}/details/`+ `${details.id}`, details);
    }
 
    deleteUser(id) {
      return this.http.delete(`${API_URL}/details/` + `${id}`);
    }

}
