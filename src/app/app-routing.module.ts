import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainListComponent } from './main-list/main-list.component';
import { Paths } from './models/paths';


const routes: Routes = [
  { path: Paths.EMPTY, redirectTo: Paths.START, pathMatch: 'full' },
  { path: Paths.START, component: MainListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
