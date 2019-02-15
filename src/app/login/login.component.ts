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
      (result) => {
        if(result["errorCode"]>0){
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          window.localStorage.setItem('token',result["data"].token);
          this._route.navigate(['/aboutus']);
        }else{
          this.error = true;
          this.errorMessage= result["errorMessage"];
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
