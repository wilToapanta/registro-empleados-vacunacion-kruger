import { Component,OnDestroy,OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-insertemployee',
  templateUrl: './insertemployee.component.html',
  styleUrls: ['./insertemployee.component.css']
})

export class InsertemployeeComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription?: Subscription;
  employee?:Employee;

  constructor(private FormBuilder:FormBuilder, 
    private employeeservice: EmployeService,
  private toastr:ToastrService) {
      this.form=this.FormBuilder.group({
        id_employe:0,
        identification:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        names:['',[Validators.required,Validators.maxLength(50),Validators.minLength(0)]],
        lastNames:['',[Validators.required,Validators.maxLength(50),Validators.minLength(0)]],
        mail:['',[Validators.required,Validators.maxLength(50),Validators.minLength(0)]]
      });
     }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.suscription?.unsubscribe();
  }

  saveEmployee(){
    const employe:Employee={
      identification:this.form.get('identification')?.value,
      names:this.form.get('names')?.value,
      lastNames:this.form.get('lastNames')?.value,
      mail:this.form.get('mail')?.value
    };
    
    this.employeeservice.saveEmployee(employe).subscribe(data=>{
      this.toastr.success('Save employee');
      this.employeeservice.listEmployee();
      this.form.reset();
    
    });
  }





}
