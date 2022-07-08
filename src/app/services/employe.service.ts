import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Employee} from '../models/employee';
import {BehaviorSubject, Observable} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  url='http://localhost:8080';
  api='/employee';
  apiUser='/users';
  list?:Employee[];
  listuser?:User[];
 

  constructor(private http:HttpClient) { }
  listEmployee(){
    this.http.get(this.url + this.api).toPromise().then(data=>{
      this.list=data as Employee[];
    
    })
  }

  deleteEmployee(id_employe: number):Observable<Employee>{
    return this.http.delete<Employee>(this.url + this.api +'/'+ id_employe);
  }

  saveEmployee(employee:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.url + this.api,employee);
    }

    listUser(){
      this.http.get(this.url + this.apiUser).toPromise().then(data=>{
        this.listuser=data as User[];
      
      })
    }
    saveUser(user:User):Observable<User>{
      return this.http.post<User>(this.url + this.apiUser,user);
    }

    deleteUser(id_user:number):Observable<User>{
      return this.http.delete<User>(this.url + this.apiUser+'/'+id_user);
    }

    login(userLogin:User): Observable<User>{
      var httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      return this.http.post<User>(this.url + this.apiUser+'/login',userLogin,httpOptions);
    }

}

