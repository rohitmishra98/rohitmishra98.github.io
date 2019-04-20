import { Component, OnInit, TemplateRef, PipeTransform, Pipe } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  modalRef: BsModalRef;
  data=dataSource;
  deleteId: any;
  searchText;
  constructor(private modalService: BsModalService) { }
  hideAlart=true;

  ngOnInit() {
    console.log(this.data);
    setTimeout(function() {
      this.hideAlert=true;
      }, 2000);
  }
  delete(id){
    console.log(this.data)
    this.data.splice(id-1, 1)
    console.log(this.data);
  }
  openconfirmationModal(id,dailog:TemplateRef<any>)
    {
      this.deleteId=id;
      let initialState = {
        message: 'Are you sure to this employee',
        title: 'Confirm Employee Delete',
        id: id,
        class: 'modal-sm'
      };
      this.modalRef = this.modalService.show(dailog, {initialState});
      
    }

    confirm(): void {
      this.delete(this.deleteId);
      this.modalRef.hide();
    }
   
    decline(): void {
      this.modalRef.hide();
    }
  


}


export interface db {
  id:number
  name: any;
  designation: string;
  salary: number;
}

const dataSource: db[] = [
  {id: 1, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 2, name: "abc", designation: "UI developer", salary: 600000},
{id: 3, name: "xyz", designation: "UI developer", salary: 800000},
{id: 4, name: "somename", designation: "UI developer", salary: 300000},
{id:  5 , name: "a", designation: "UI developer", salary: 8800000},
{id: 6, name: "maane", designation: "UI developer", salary: 3300000},
{id: 7, name: "tree", designation: "UI developer", salary: 550000},
{id: 8, name: "ankit", designation: "UI developer", salary: 790000},
{id: 9, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 10, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 11, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 12, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 13, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 14, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 15, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 16, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 17, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 18, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 19, name: "ajinkya", designation: "UI developer", salary: 500000},
{id: 20, name: "ajinkya", designation: "UI developer", salary: 500000}
];


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText?: any): any {
    return searchText ? items.filter(sal => Object.keys(sal).some(k => 
      sal[k].toString().toLowerCase().indexOf(searchText) !== -1)) : items;
}
}