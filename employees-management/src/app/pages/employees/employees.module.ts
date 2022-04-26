import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ButtonsModule, ControlsModule, IndicatorsModule, PopupsModule } from '@app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './pages/shared/shared-routing.module';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
    IndicatorsModule,
    PopupsModule
  ]
})
export class EmployeesModule { }
