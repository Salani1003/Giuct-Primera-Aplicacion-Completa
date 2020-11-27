import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { FindDelComponent } from './pages/find-del/find-del.component';
import { FindModifyComponent } from './pages/find-modify/find-modify.component';
import { FindSingleComponent } from './pages/find-single/find-single.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { SingleComponent } from './pages/single/single.component';
import { PersonasComponent } from './personas.component';

const routes: Routes = [
  {
    path:'',component:PersonasComponent,
    children:[
      {
        path:'all',component:AllComponent
      },
      {
        path:'create', component:CreateComponent
      },
      {
        path:'modify', component: FindModifyComponent
      },
      {
        path:'modify/:id',component:ModifyComponent
      },
      {
        path:'single', component:FindSingleComponent
      },
      {
        path:'single/:id', component:SingleComponent
      },
      {
        path:'del', component:FindDelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
