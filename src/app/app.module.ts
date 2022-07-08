import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ListemployeeComponent } from './components/listemployee/listemployee.component';
import { InsertemployeeComponent } from './components/insertemployee/insertemployee.component';
import { LoginComponent } from './components/login/login.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { InsertuserComponent } from './components/insertuser/insertuser.component';
import { StartmenuempComponent } from './components/startmenuemp/startmenuemp.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListemployeeComponent,
    InsertemployeeComponent,
    LoginComponent,
    ListuserComponent,
    MenuComponent,
    UserComponent,
    InsertuserComponent,
    StartmenuempComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
