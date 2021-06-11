import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { 

  }

  fetchAccount(documentNumber: string) {
    return this.http.get(
      'http://localhost:8080/get-account/' + documentNumber
    )
    .pipe((res) => {
      return res;
    });;
  }

  createAccount(account: any) {
    return this.http.post(
      'http://localhost:8080/create-account',
      JSON.stringify(account),
      {
        observe: "response",
        headers: new HttpHeaders({
          "Content-Type": "application/json; charset=utf-8",
        })
      }
    )
    .pipe((res) => {
      return res;
    });
  }
}
