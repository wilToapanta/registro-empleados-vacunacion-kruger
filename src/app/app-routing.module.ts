import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component';
import{UserComponent} from './components/user/user.component';
import{StartmenuempComponent} from './components/startmenuemp/startmenuemp.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'user',component:UserComponent},
  {path:'startmenu',component:StartmenuempComponent},
  {path:'menu',component:MenuComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
