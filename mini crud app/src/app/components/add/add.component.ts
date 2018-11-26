import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[HomeComponent]
})
export class AddComponent implements OnInit {

  cpt_ddate: any;
  cpt_idate: any;
  cpt_id: any;
  cpt_obj: any;
  title: string="Edit";
  id1: number;
  cpt_name
  cpt_company
  companies:any=[
    {id:1,name: 'IBM'},
    {id:2,name: 'RCA'}
  ]
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private home:HomeComponent
  ) { 
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.id1 = id
    console.log(this.id1)
    
    if(isNaN(this.id1)){
      this.title="Add a"
      console.log(this.title)
    }
    else{
      this.cpt_obj = this.home.dataSource.filter(sal => sal.id== this.id1);
      this.cpt_name=this.cpt_obj[0].computername
      this.cpt_id=this.cpt_obj[0].id
      this.cpt_company=this.cpt_obj[0].company
      this.cpt_idate=this.cpt_obj[0].introduced
      this.cpt_ddate=this.cpt_obj[0].discontinued
      console.log(this.cpt_obj[0],this.cpt_name,this.cpt_id)
      }
    }
  
  ngOnInit() {
   
  }
  
  onSubmit(e){
   
    
    if(this.title=="Edit"){
      e.value.id=this.id1
      console.log(e.value)
      let obj =e.value
       this.home.dataSource.splice(e.value.id-1, 1, e.value);
       this.router.navigate(['/main']);
    }
    else{
      let id =this.home.dataSource.length+1
      e.value.id = id
      console.log(e.value)
      this.home.dataSource.push(e.value)
      console.log(this.home.dataSource)
      this.router.navigate(['/main']);
      
    }
  }
  delete(id){
    console.log(this.home.dataSource)
    this.home.dataSource.splice(id-1, 1)
    this.router.navigate(['/main']);
    console.log(this.home.dataSource)
  }



}
