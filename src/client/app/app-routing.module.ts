import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
       { path: '', redirectTo: 'contests', pathMatch: 'full' },
       { path: 'home', redirectTo: 'contests', pathMatch: 'full' },
      //  { path: '**', redirectTo: 'contests', pathMatch: 'full' }, //this catches healthy urls like /contests too. TODO: fix this issue
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
