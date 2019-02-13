import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: string="";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges:boolean = false;
  constructor(private _backendService: BackendService,private _route:Router) { }

  ngOnInit() {
  }
  // define a method
  setUser(formData){
    this.dataLoading = true;
    
    this.querySubscription = this._backendService.setUser(formData).subscribe(
      (result) => {
        if(result["errorCode"]>0){
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
        }else{
          this.error = true;
          this.errorMessage= result["errorCode"];
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

  ngOnDestroy(){
    if(this.querySubscription){
      this.querySubscription.unsubscribe();
    }
  }

}
