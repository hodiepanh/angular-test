import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DashboardMatComponent } from './dashboard-mat/dashboard-mat.component';

const routes: Routes = [
  {path: "dashboard", component:DashboardMatComponent},
  {path: "edit/:id", component: EditComponent  },
  {path: "create", component: CreateComponent },
  {path: "",component: DashboardMatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
