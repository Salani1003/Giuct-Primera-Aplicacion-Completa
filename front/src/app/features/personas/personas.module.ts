import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { SingleComponent } from './pages/single/single.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindSingleComponent } from './pages/find-single/find-single.component';
import { FindModifyComponent } from './pages/find-modify/find-modify.component';
import { FindDelComponent } from './pages/find-del/find-del.component';

@NgModule({
  declarations: [
    PersonasComponent,
    SingleComponent,
    AllComponent,
    CreateComponent,
    ModifyComponent,
    FindSingleComponent,
    FindModifyComponent,
    FindDelComponent,
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PersonasComponent,
    SingleComponent,
    AllComponent,
    CreateComponent,
    ModifyComponent,
    FindSingleComponent,
    FindModifyComponent,
    FindDelComponent,
  ],
})
export class PersonasModule {}
