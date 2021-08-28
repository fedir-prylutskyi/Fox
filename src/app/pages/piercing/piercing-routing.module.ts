import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiercingComponent } from "./piercing.component";

const routes: Routes = [
  {
    path: '',
    component: PiercingComponent,
    data: {
      title: 'Piercing'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiercingRoutingModule {
}
