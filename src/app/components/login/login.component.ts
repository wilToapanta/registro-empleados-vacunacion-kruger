import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  suscription?: Subscription;
  user?:User;
  constructor(private FormBuilder:FormBuilder,public employeeService:EmployeService,
    public toastr:ToastrService, private router:Router) {
      this.form=this.FormBuilder.group({
        id_user:0,
        usuario:['',[Validators.required]],
        password:['',[Validators.required]],
     });
     }

  ngOnInit(): void {
  }

  login(){
    const user:User={
      
      usuario:this.form.get('usuario')?.value,
      password:this.form.get('password')?.value,
      
    };
   this.employeeService.login(user).subscribe((data)=>
    this.startSession(data));
  }

  startSession(resultado:User){
    if(resultado){
      let rolUser=resultado.rol;
      if(rolUser=="Administrador"){
        this.toastr.success('Bienvenido');
        this.router.navigate(['/startmenu']);
        
      }
      else{
        console.log(0);
      }
    }
    else{
      this.toastr.warning('Usuario o contraseña incorrecto');
      this.form.reset();
    }
  }
  }



  


