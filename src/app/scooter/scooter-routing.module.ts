import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScooterListComponent } from './scooter-list/scooter-list.component';
import { ModelListComponent } from './model-list/model-list.component';

const routes: Routes = [
  { path: 'scooter-list', component: ScooterListComponent },
  { path: 'model-sccoter-list', component: ModelListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScooterRoutingModule {}
