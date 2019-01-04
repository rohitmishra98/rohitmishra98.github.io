import { Component, OnInit ,Input} from '@angular/core';
import { Search } from '../search';
import { PresetData } from '../preset-data';

import { InputComponent } from '../input/input.component';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';

import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CaselistService } from '../caselist.service';

export interface PeriodicElement {
  casenumber: string;
  highcourt: number;
  petitioner: number;
  respondent: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {highcourt: 1, casenumber: 'case', petitioner: 1.0079, respondent: 'someone'},
  {highcourt: 2, casenumber: 'case', petitioner: 4.0026, respondent: 'someone'},
  {highcourt: 3, casenumber: 'case', petitioner: 6.941, respondent: 'someone'},
  {highcourt: 4, casenumber: 'case', petitioner: 9.0122, respondent: 'someone'},
  {highcourt: 5, casenumber: 'case', petitioner: 10.811, respondent: 'someone'},
  {highcourt: 6, casenumber: 'case', petitioner: 12.0107, respondent: 'someone'},
  {highcourt: 7, casenumber: 'case', petitioner: 14.0067, respondent: 'someone'},
  {highcourt: 8, casenumber: 'case', petitioner: 15.9994, respondent: 'someone'},
  {highcourt: 9, casenumber: 'case', petitioner: 18.9984, respondent: 'someone'},
  {highcourt: 10, casenumber: 'case', petitioner: 20.1797, respondent: 'someone'},
];



@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css'],
  providers:[InputComponent],
  
  
 
 
})


export class SearchDataComponent implements OnInit {

  displayedColumns: string[] = ['highcourt', 'casenumber', 'petitioner', 'respondent'];
  dataSource = ELEMENT_DATA;  
  
  public pname;
  public year;
  public location;
  public spin:boolean;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private inputComponent:InputComponent,
    private spinner: NgxSpinnerService,
    private _cases:CaselistService
  ) 
  { }
  
  // public data = {};


  
   public casedata = [];
   public casedataid = [];
  public condition;
  range=[];
  locations=[];
  
  ngOnInit() {
    this.range =this.inputComponent.range;
    this.locations=this.inputComponent.locations;
    // console.log(this.range)
    
    this.spinner.show();
    this.spin=true
 
    setTimeout(() => {
        /** spinner ends after .5 seconds */
        this.spinner.hide();
        this.spin=false

    }, 500);
    
    
    let name = this.route.snapshot.paramMap.get('partyname')
    
    this.pname = name;

    let yeardata = parseInt(this.route.snapshot.paramMap.get('id'));
    this.year = yeardata;
    // console.log(this.route);

    let lo = this.route.snapshot.paramMap.get('location');
    this.location =lo;

    let input_data = [name,yeardata,lo]  
    
    // console.log(name+yeardata+lo);

    // console.log(this.pname+this.year+this.location);
    

    this._cases.getCases()
                .subscribe(data => this.casedata = data );

    this._cases.getCasesId(input_data)
    .subscribe(data => this.casedataid = data );   

   
  }



 

  // data =[];

  log(x){
    // console.log(x);
    // console.log(this.searchModel);
  }
 
  onSubmit(x){
    this.spinner.show();
    this.spin=true
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.spin=false
    }, 300);
    this.router.navigate(['/search/', x.partyname, x.year ,x.location]);
   
  //  this.searchModel = new Search(x.partyname,true,x.year,x.location);
  //  console.log('formdata' + JSON.stringify(this.searchModel));
  //  console.log(this.searchForm);
  }



}
