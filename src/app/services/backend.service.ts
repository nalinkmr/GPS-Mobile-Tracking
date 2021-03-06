import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http:HttpClient) { }

  setUser(formData){
    // let fakeResponse_3 = {
    //   "errorCode" : "1",
    //   "errorMessage" : "user created",
    //   "rowCount" : "30",
    //   "data":{
    //     "token" : "abcd"
    //   }
    // };

    // let fakeResponse_1 = {
    //   "errorCode" : "0",
    //   "errorMessage" : "error while creating user",
    //   "rowCount" : "30",
    //   "data":{
    //     "token" : "login"
    //   }
    // };

    // return Observable.create(
    //   observer => {
    //     setTimeout(() => {
    //       observer.next(fakeResponse_3)
    //     }, 2000);
    //   }
    // )
    let token = localStorage.getItem('token') ? localStorage.getItem('token'):"abcd";
    let httpOptions ={ headers:  new HttpHeaders({'content-Type':'application/json','token':token}) };
    return this._http.post("http://localhost:3000/signup",formData,httpOptions);
  }

// login Service

  login(formData){
    let fakeResponse_1 = {
      "errorCode" : "0",
      "errorMessage" : "user id is not valid",
      "rowCount" : "30",
      "data":{
        "token" : "abcd"
      }
    };

    let fakeResponse_2 = {
      "errorCode" : "0",
      "errorMessage" : "passowrd is not valid",
      "rowCount" : "30",
      "data":{
        "token" : "abcd"
      }
    };

    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "authentication succesfull",
      "rowCount" : "30",
      "data":{
        "token" : "abcd"
      }
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 200);
      }
    )
  }


  setLocation(formData){
      // console.log(formData);
  }

  getUserLocation(){
    
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data":[{
        "email" : "eror",
        "lat" : 'some',
        "long":'long',
        "createdAt":"sep 24 10:00:00 pm"
      },
      {"email" : "eror",
        "lat" : 'something',
        "long":'longitute',
        "createdAt":"sep 27 10:00:00 pm"
    }
    ]
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 200);
      }
    )
  }


  getUser(){
    
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data":{
        "inputEmail" : " nalinkmr@gmail.com",
        "inputPassword" : "password",
        "question" : "Question",
        "answer" : "Answer"
      }
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 200);
      }
    )
  }


  updateUser(formData){
    
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data":{
        "token" : "abcd",
      }
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }, 200);
      }
    )
  }
}




// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BackendService {

//   constructor() { }

//   setUser(formData){
//     // let fakeResponse_3 = {
//     //   "errorCode" : "1",
//     //   "errorMessage" : "user created",
//     //   "rowCount" : "30",
//     //   "data":{
//     //     "token" : "abcd"
//     //   }
//     // };

//     // let fakeResponse_1 = {
//     //   "errorCode" : "0",
//     //   "errorMessage" : "error while creating user",
//     //   "rowCount" : "30",
//     //   "data":{
//     //     "token" : "login"
//     //   }
//     // };

//     // return Observable.create(
//     //   observer => {
//     //     setTimeout(() => {
//     //       observer.next(fakeResponse_3)
//     //     }, 2000);
//     //   }
//     // )

//   }

// // login Service

//   login(formData){
//     let fakeResponse_1 = {
//       "errorCode" : "0",
//       "errorMessage" : "user id is not valid",
//       "rowCount" : "30",
//       "data":{
//         "token" : "abcd"
//       }
//     };

//     let fakeResponse_2 = {
//       "errorCode" : "0",
//       "errorMessage" : "passowrd is not valid",
//       "rowCount" : "30",
//       "data":{
//         "token" : "abcd"
//       }
//     };

//     let fakeResponse_3 = {
//       "errorCode" : "1",
//       "errorMessage" : "authentication succesfull",
//       "rowCount" : "30",
//       "data":{
//         "token" : "abcd"
//       }
//     };

//     return Observable.create(
//       observer => {
//         setTimeout(() => {
//           observer.next(fakeResponse_3)
//         }, 200);
//       }
//     )
//   }


//   setLocation(formData){
//       // console.log(formData);
//   }

//   getUserLocation(){
    
//     let fakeResponse_3 = {
//       "errorCode" : "1",
//       "errorMessage" : "",
//       "rowCount" : "30",
//       "data":[{
//         "email" : "eror",
//         "lat" : 'some',
//         "long":'long',
//         "createdAt":"sep 24 10:00:00 pm"
//       },
//       {"email" : "eror",
//         "lat" : 'something',
//         "long":'longitute',
//         "createdAt":"sep 27 10:00:00 pm"
//     }
//     ]
//     };

//     return Observable.create(
//       observer => {
//         setTimeout(() => {
//           observer.next(fakeResponse_3)
//         }, 200);
//       }
//     )
//   }


//   getUser(){
    
//     let fakeResponse_3 = {
//       "errorCode" : "1",
//       "errorMessage" : "",
//       "rowCount" : "30",
//       "data":{
//         "inputEmail" : " nalinkmr@gmail.com",
//         "inputPassword" : "password",
//         "question" : "Question",
//         "answer" : "Answer"
//       }
//     };

//     return Observable.create(
//       observer => {
//         setTimeout(() => {
//           observer.next(fakeResponse_3)
//         }, 200);
//       }
//     )
//   }


//   updateUser(formData){
    
//     let fakeResponse_3 = {
//       "errorCode" : "1",
//       "errorMessage" : "",
//       "rowCount" : "30",
//       "data":{
//         "token" : "abcd",
//       }
//     };

//     return Observable.create(
//       observer => {
//         setTimeout(() => {
//           observer.next(fakeResponse_3)
//         }, 200);
//       }
//     )
//   }
// }
