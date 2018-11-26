import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText
  dataSource=data
  
  log(e){
    console.log(e)
  }

  onSubmit(val){
    if(val.searchText!='' && this.searchText!=undefined){
      console.log(val)
    }
  }

  
  constructor() { }

  ngOnInit() {
   
  }

}

export interface db {
  id:number
  computername: any;
  introduced: string;
  discontinued: any;
  company: string;
}

const data: db[] = [
  {id:1,computername: 'pc4', introduced: '09 Sep 2008', discontinued: '06 Jul 2015', company: 'IBM'},
  {id:2,computername: 'one', introduced: '09 Sep 2008', discontinued:'-', company: 'IBM'},
  {id:3,computername: 'admin', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:4,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:5,computername: 'ace', introduced: '09 Sep 2008', discontinued: '06 Jul 2015', company: 'IBM'},
  {id:6,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:7,computername:'ace', introduced: '09 Sep 2008', discontinued: '06 Jul 2015', company: 'IBM'},
  {id:8,computername: 'ace', introduced: '09 Sep 2008', discontinued: '--', company: 'IBM'},
  {id:9,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:10,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:11,computername: 'ace', introduced: '09 Sep 2008', discontinued: '06 Jul 2015', company: 'IBM'},
  {id:12,computername: 'ace', introduced: '09 Sep 2008', discontinued:'-', company: 'IBM'},
  {id:13,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:14,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:15,computername: 'ace', introduced: '09 Sep 2008', discontinued: '06 Jul 2015', company: 'IBM'},
  {id:16,computername: 'ace', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:17,computername:'bce', introduced: '09 Sep 2008', discontinued: '06 Jul 2015', company: 'IBM'},
  {id:18,computername: 'pc1', introduced: '09 Sep 2008', discontinued: '--', company: 'IBM'},
  {id:19,computername: 'pc2', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
  {id:20,computername: 'pc3', introduced: '09 Sep 2008', discontinued: '-', company: 'IBM'},
];


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText?: any): any {
    return searchText ? items.filter(sal => sal.computername.includes(searchText)) : items;
}
}