import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const homeModule =()=> import('./features/home/home.module').then((m)=>m.HomeModule);
const personasModule =()=>import('./features/personas/personas.module').then((m)=>m.PersonasModule)
const reunionesModule=()=>import('./features/reuniones/reuniones.module').then((m)=>m.ReunionesModule)
const asignacionModule=()=>import('./features/asignacion/asignacion.module').then((m)=>m.AsignacionModule)
const routes: Routes = [
  {
    path:'home',
    loadChildren:homeModule,
    
  },
  {
    path:'personas',
    loadChildren:personasModule,
    
  },
  {
    path:'reuniones',
    loadChildren: reunionesModule,
  },
  {
    path:'asignacion',
    loadChildren:asignacionModule,
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
    
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
