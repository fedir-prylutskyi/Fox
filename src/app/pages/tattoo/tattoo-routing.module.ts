import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TattooComponent } from "./tattoo.component";

const routes: Routes = [
  {
    path: '',
    component: TattooComponent,
    data: {
      title: 'Tattoo'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TattooRoutingModule {
}
