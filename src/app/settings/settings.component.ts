import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: string="";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges:boolean = false;
  docData;

  constructor(private _backendService: BackendService,private _route:Router) { }

  ngOnInit() {
    this.getData();
  }


  getData(){
    this.dataLoading = true;
    
    this.querySubscription = this._backendService.getUser().subscribe(
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
  // define a method
  settings(formData){
    this.dataLoading = true;
    
    this.querySubscription = this._backendService.updateUser(formData).subscribe(
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

