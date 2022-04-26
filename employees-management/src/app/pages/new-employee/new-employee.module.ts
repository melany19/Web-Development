import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEmployeeRoutingModule } from './new-employee-routing.module';
import { NewEmployeeComponent } from './new-employee.component';
import { ButtonsModule, ControlsModule, IndicatorsModule, PopupsModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './pages/shared/shared-routing.module';


@NgModule({
  declarations: [
    NewEmployeeComponent
  ],
  imports: [
    CommonModule,
    NewEmployeeRoutingModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
    IndicatorsModule,
    PopupsModule
  ]
})
export class NewEmployeeModule { }
