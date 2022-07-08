import { Component, OnInit } from '@angular/core';
import {EmployeService} from 'src/app/services/employe.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  constructor(public employeeService:EmployeService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.employeeService.listEmployee();
    
   
  }
  deleteEmployee(id_employee: any){
    if(confirm('Delete')){
      this.employeeService.deleteEmployee(id_employee).subscribe(data =>{
        this.toastr.warning('Delete');
        this.employeeService.listEmployee();
      });
    }
  }

  

}
