
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// const baseUrl = `${environment.apiUrl}/users`;
const baseUrl = "https://jsonplaceholder.typicode.com/comments?postId=1";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // user: User[] = [
  //   {
  //     id: 1,
  //     uploadImg: "test",
  //     name: "test",
  //     surname: "test",
  //     company: "test",
  //     jobTitle: "test",
  //     email: "test",
  //     lable: "test",
  //     cellPhone: "test",
  //     birthday: "test",
  //     notes: "test",
  //     relationship: "test",
  //     chat: "test",
  //     internetCell: "test",
  //     customField: "test",
  //   },
  // ]

  constructor(private http: HttpClient) { }

  // create(data: User):any {
  //   this.user.push(data)
  // }

  // getData() {
  //   return of(this.user)
  // }
  // update(id: string,params: any):any {
  // of(this.user,id,params)
  // }

  
  getAll() {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    debugger;
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
