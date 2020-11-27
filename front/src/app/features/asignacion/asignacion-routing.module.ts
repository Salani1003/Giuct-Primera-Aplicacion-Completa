import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { AsignacionComponent } from './asignacion.component';
import { CreateComponent } from './pages/create/create.component';
import { PorPersonaComponent } from './pages/por-persona/por-persona.component';
import { PorReunionComponent } from './pages/por-reunion/por-reunion.component';
import { FindPorReunionComponent } from './pages/find-por-reunion/find-por-reunion.component';
import { FindPorPersonaComponent } from './pages/find-por-persona/find-por-persona.component';

const routes: Routes = [
  {
    path:'',component:AsignacionComponent,
    children:[
      {
        path:"all", component:AllComponent
      },
      {
        path:"create",component:CreateComponent
      },
      {
        path:"reuniones", component:FindPorReunionComponent
      },
      {
        path:'reuniones/:id',component:PorReunionComponent
      },
      {
        path:'personas', component:FindPorPersonaComponent
      },
      {
        path:'personas/:id', component:PorPersonaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionRoutingModule { }
