import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(h => h.HomeModule),
  },
  {
    path: 'employee',
    loadChildren: () => import('./features/employees/employee.module').then(e => e.EmployeeModule),
  },
  {
    path: 'view',
    loadChildren: () => import('./features/view-employees/view.module').then(v => v.ViewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
