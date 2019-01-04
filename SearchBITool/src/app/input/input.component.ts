import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { Router } from '@angular/router';
import { SearchDataComponent } from '../search-data/search-data.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { range } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers:[]
})



export class InputComponent implements OnInit {
  startYear=1950;
  range = [];
  locations=[
  'Allahabad',
  'Mumbai',
  'Kolkata',
  'Chhattisgarh',
  'Delhi',
  'Goa',
  'Guwahati',
  'Himachal Pradesh',
  'Hyderabad',
  'Rajasthan',
  'Jammu & Kashmir',
  'Jharkhand',
  'Jodhpur',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Madras',
  'Manipur',
  'Meghalaya',
  'Orissa',
  'Patna',
  'Punjab & Haryana',
  'Sikkim',
  'Tripura',
  'Uttarakhand'
  ];
constructor(private router:Router){


  var year = new Date().getFullYear();
  // console.log(year);
    
    this.range.push(this.startYear);
    for (var i = ++this.startYear; i <= year; i++) {
        this.range.push(i);
    }
    this.range.reverse();
}
  
 

  y={};
 public searchModel =new Search('',false,2018,'Delhi');

 

  // years =[2010,2019,2018]
  // data =[];

  log(x){
    // console.log(x);
  }
 
  

 
 
  onSubmit(x){
    // var a=document.getElementById('year');
    // a.classList.contains('ng-invalid');
    // console.log(a);
    
  
   this.y= JSON.stringify(x)
  //  console.log(x.year);
   
    if(x.year==undefined){
      this.searchModel = new Search(x.partyname,true,2018,'delhi');
      this.router.navigate(['/search/'+x.partyname+'/2018/delhi' ]);
      
      // console.log('formdata' + JSON.stringify(this.searchModel));
      // this.searchcomp.ngOnInit
      
    }
    else{
   this.router.navigate(['/search/', x.partyname, x.year ,x.location]);
   
   this.searchModel = new Search(x.partyname,true,x.year,x.location);
  //  console.log('formdata' + JSON.stringify(this.searchModel));

   
    }
  
    
    
 }
 
 ngOnInit(){
  
   
}

 

}


