import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserCourseComponent } from './user-course/user-course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserMasterComponent,
    UserHomeComponent,
    UserCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
