import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [{
    path: 'studentdetails',
    component: StudentsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

export const routedComponents = [
  StudentComponent,
  StudentsComponent,
];