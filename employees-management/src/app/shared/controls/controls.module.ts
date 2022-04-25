import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { DateModule } from './date/date.module';
import { DateRangeModule } from './date-range/date-range.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    DateModule,
    DateRangeModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    DateModule,
    DateRangeModule
  ]
})
export class ControlsModule { }
