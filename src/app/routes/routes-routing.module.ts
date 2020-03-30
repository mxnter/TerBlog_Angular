import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', children: [
      { path: '', loadChildren: './front/front.module#FrontModule' },
      { path: 'rear', loadChildren: './rear/rear.module#RearModule' },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
