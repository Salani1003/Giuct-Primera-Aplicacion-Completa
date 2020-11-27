import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignacionRoutingModule } from './asignacion-routing.module';
import { AllComponent } from './pages/all/all.component';
import { PorPersonaComponent } from './pages/por-persona/por-persona.component';
import { PorReunionComponent } from './pages/por-reunion/por-reunion.component';
import { CreateComponent } from './pages/create/create.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsignacionComponent } from './asignacion.component';
import { FindPorPersonaComponent } from './pages/find-por-persona/find-por-persona.component';
import { FindPorReunionComponent } from './pages/find-por-reunion/find-por-reunion.component';

@NgModule({
  declarations: [
    AsignacionComponent,
    AllComponent,
    PorPersonaComponent,
    PorReunionComponent,
    CreateComponent,
    FindPorPersonaComponent,
    FindPorReunionComponent,
  ],
  imports: [
    CommonModule,
    AsignacionRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AsignacionComponent,
    AllComponent,
    PorPersonaComponent,
    PorReunionComponent,
    CreateComponent,
    FindPorPersonaComponent,
    FindPorReunionComponent,
  ],
})
export class AsignacionModule {}
