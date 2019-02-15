import { Component, OnInit ,OnDestroy } from '@angular/core';
import { BackendService} from '../services/backend.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit , OnDestroy {

  error:boolean= false;
  errorMessage:string="";
  mysavedData;
  private querySubscription;
  dataLoading:boolean = false;



  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.getUserLoc();
  }

  getUserLoc(){
    this.dataLoading = true;
    this.querySubscription = this._backendService.getUserLocation().subscribe((res) =>{
      if(res["errorCode"]>0){
        this.error = false;
        this.dataLoading= false;
        this.errorMessage = "";
        this.mysavedData = res["data"];
      }else{
        this.error = true;
        this.dataLoading= true;
        this.errorMessage = res["errorCode"];
      }
    });
  }

  ngOnDestroy(){

  }

}
