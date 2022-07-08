import { Component, OnInit } from '@angular/core';
import {EmployeService} from 'src/app/services/employe.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(public employeeService:EmployeService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.employeeService.listUser();
    
  }
  
  deleteUser(id_user:any){
      if(confirm('Desea eliminar este usuario?')){
        this.employeeService.deleteUser(id_user).subscribe(
          data=>{
            this.toastr.warning('Usuario eliminado exitosamente');
            this.employeeService.listUser();
          }
        )
      }
  }

}
