import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  setUser(formData){
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "user created",
      "rowCount" : "30",
      "data":{
        "token" : "abcd"
      }
    };

    let fakeResponse_1 = {
      "errorCode" : "0",
      "errorMessage" : "error while creating user",
      "rowCount" : "30",
      "data":{
        "token" : "eror"
      }
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 5000);
      }
    )
  }
}
