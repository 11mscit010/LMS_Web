import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';

const routes: Routes = [
  {
    path: 'User',
    component: UserMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
