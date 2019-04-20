import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableListComponent } from 'src/app/table-list/table-list.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[TableListComponent]
})
export class AddEmployeeComponent implements OnInit {
  emp_id:number;
  emp_name: any;
  emp_designation: any;
  emp_salary: any;
  emp_obj;
  title: string="Edit";
  id1: number;
  
  buttonVal="Update";
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private tableList:TableListComponent
  ) { 
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.id1 = id
    console.log(this.id1)
    
    if(isNaN(this.id1)){
      this.title="Add an"
      console.log(this.title)
      this.buttonVal="Add";
    }
    else{
      let empObj = this.tableList.data.filter(sal => sal.id== this.id1);
      this.emp_obj =empObj[0];
          if(this.emp_obj.length==0){
            this.title="Add an"
          }
          else{
            this.emp_name=this.emp_obj.name;
            this.emp_designation=this.emp_obj.designation;
            this.emp_salary=this.emp_obj.salary;
            this.emp_id=this.emp_obj.id;
          }
      
      }
  }
  

  ngOnInit() {
  }

  onSubmit(e){
   console.log(e)
    if(this.title=="Edit"){
      e.value.id=this.id1
      console.log(e.value)
      let obj =e.value
       this.tableList.data.splice(e.value.id-1, 1, e.value);
       this.router.navigate(['/list']);
    }
    else{
      let id =this.tableList.data.length+1
      e.value.id = id
      console.log(e.value)
      this.tableList.data.push(e.value)
      console.log(this.tableList.data)
      this.router.navigate(['/list']);
      
    }
  }
  

  validateForms(){
    
        // Get the forms we want to add validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
     
  }

}
