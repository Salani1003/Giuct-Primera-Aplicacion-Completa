import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindSingleComponent } from './pages/find-single/find-single.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { FindDelComponent } from './pages/find-del/find-del.component';
import { FindModifyComponent } from './pages/find-modify/find-modify.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { SingleComponent } from './pages/single/single.component';
import { ReunionesComponent } from './reuniones.component';

const routes: Routes = [
  {
    path: '',
    component: ReunionesComponent,
    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path:'single', component:FindSingleComponent
      },
      {
        path: 'single/:id',
        component: SingleComponent,
      },
      {
        path:'del',component:FindDelComponent
      },
      {
        path: 'modify',
        component: FindModifyComponent,
      },
      {
        path: 'modify/:id',
        component: ModifyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionesRoutingModule {}
