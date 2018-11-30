import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-week-picker',
  templateUrl: './week-picker.component.html',
  styleUrls: ['./week-picker.component.css']
})
export class WeekPickerComponent implements OnInit {

  constructor() { }
  weeks=[];
  selectedWeek:any;
  year:number=2018;
  isLoaded=false;
  weekValue:object;
  ngOnInit() {
   this.changeYear(this.year)
  }
  weekChange(event){
    
    this.weekValue=event.value
    console.log(this.weekValue);
  }

  changeYear(year){
    this.weeks=[];
    var startDate = moment(new Date(year,0,1)).isoWeekday(8);
    if(startDate.date() === 8) {
        startDate = startDate.isoWeekday(-6);
        
    }
    var today = moment().isoWeekday('Sunday');
    while(startDate.isBefore(today)) {
      let startDateWeek = startDate.isoWeekday('Monday').format('MMM DD,YYYY');
      let endDateWeek = startDate.isoWeekday('Saturday').format('MMM DD,YYYY');
      let startDateVal = startDate.isoWeekday('Monday').format('YYYY-MM-DD');
      let endDateVal = startDate.isoWeekday('Saturday').format('YYYY-MM-DD');
      startDate.add(6,'days');
      
      this.weeks.push(
                {'start':startDateWeek,
                  'end':endDateWeek,
                  'startVal':startDateVal,
                  'endVal':endDateVal,
                  }
                );
       
     }
     console.log(this.weeks);
     this.isLoaded=true;
  }

}
