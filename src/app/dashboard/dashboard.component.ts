import { Component, OnInit , OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { interval } from 'rxjs';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , OnDestroy {

  latitute: number;
  longitute: number;
  data;
  stopCondition = false;
  private querySubscription;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    const secondsCounter = interval(2000);
    this.querySubscription = secondsCounter.subscribe(  
      n =>
       this.getLocation()
      );
  }

  getLocation(){
      var positionOption = { enableHighAccuracy: false, maximumAge: Infinity,timeout:60000};

      var gpsSuccess = function (currentPosition){

      };

      var gpsFail = function (){

      };

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
          this.latitute = position.coords.latitude;
          this.longitute = position.coords.longitude;

          this.data = {"latitute":position.coords.latitude,"longitute":position.coords.longitude};
          console.log(this.data);
        //   this._backendService.setLocation(this.data).subscribe((res) => console.log("success"));
        // }),gpsFail,positionOption);
      });
    }
  }
  ngOnDestroy(){
    if(this.querySubscription){
      this.querySubscription.unsubscribe();
    }

  }

}
