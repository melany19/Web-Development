import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesModule)
  },
  {
    path: 'new-employee',
    loadChildren: () => import('./pages/new-employee/new-employee.module').then( m => m.NewEmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
