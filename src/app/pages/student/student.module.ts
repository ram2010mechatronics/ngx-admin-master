import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule, routedComponents } from './student-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  declarations: [ routedComponents ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ThemeModule,
  ],
})
export class StudentModule { }
