import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit , OnDestroy {
  error : boolean = false;
  errorMessage : string = "";
  dataLoading : boolean = false;
  private querySubscription;

  login(formData){
    this.querySubscription = this._backendService.login(formData).subscribe(
      (res) => {
        if(res["errorCode"]>0){
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          window.localStorage.setItem('token',res["data"].token);
          this._route.navigate(['/report']);  // to navigate if user press submit button.
        }else{
          this.error = true;
          this.errorMessage= res["errorMessage"];
          this.dataLoading = false;
        }
      },
      (error) => {
        this.error = error.message;
      },
      () =>{

      }
    );
  }



  constructor(private _backendService : BackendService, private _route:Router) { }

  ngOnInit() {
  }

  ngOnDestroy(){

  }
}
