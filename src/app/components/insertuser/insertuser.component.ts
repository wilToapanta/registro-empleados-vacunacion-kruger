import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-insertuser',
  templateUrl: './insertuser.component.html',
  styleUrls: ['./insertuser.component.css']
})
export class InsertuserComponent implements OnInit  {
  form: FormGroup;
  suscription?: Subscription;
  user?:User;
  
  constructor(private FormBuilder:FormBuilder,public employeeService:EmployeService,
    public toastr:ToastrService) {
      this.form=this.FormBuilder.group({
        id_user:0,
        id_employe:['',[Validators.required]],
        usuario:['',[Validators.required]],
        password:['',[Validators.required]],
        rol:['',[Validators.required]]
     });
    }

  ngOnInit(): void {
    this.employeeService.listEmployee();
  }
  
  saveUser(){
    const user:User={
      id_employee:this.form.get('id_employe')?.value,
      usuario:this.form.get('usuario')?.value,
      password:this.form.get('password')?.value,
      rol:this.form.get('rol')?.value
    };
    this.employeeService.saveUser(user).subscribe(data=>{
      this.toastr.success('Usuario registrado exitosmente');
      this.employeeService.listUser();
      this.form.reset();
    });
  }

}
