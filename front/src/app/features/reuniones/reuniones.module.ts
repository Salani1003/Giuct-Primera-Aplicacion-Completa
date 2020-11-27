import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReunionesRoutingModule } from './reuniones-routing.module';
import { AllComponent } from './pages/all/all.component';
import { SingleComponent } from './pages/single/single.component';
import { CreateComponent } from './pages/create/create.component';
import { ModifyComponent } from './pages/modify/modify.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReunionesComponent } from './reuniones.component';
import { FindModifyComponent } from './pages/find-modify/find-modify.component';
import { FindDelComponent } from './pages/find-del/find-del.component';
import { FindSingleComponent } from './pages/find-single/find-single.component';

@NgModule({
  declarations: [
    ReunionesComponent,
    AllComponent,
    SingleComponent,
    CreateComponent,
    ModifyComponent,
    FindModifyComponent,
    FindDelComponent,
    FindSingleComponent,
  ],
  imports: [
    CommonModule,
    ReunionesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReunionesComponent,
    AllComponent,
    SingleComponent,
    CreateComponent,
    ModifyComponent,
    FindModifyComponent,
    FindDelComponent,
    FindSingleComponent,
  ],
})
export class ReunionesModule {}
