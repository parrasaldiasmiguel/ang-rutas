import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    /*
    rutas  para buscar a los componentes hijos
    ./compa/compb
    ./compa/compc
    */
    path :'compa', component: CompaComponent, children :[
      {path: 'compb' ,component: CompbComponent},
      {path: 'compc' ,component: CompcComponent},
    ]
  },
  {path: 'sub1' ,component: Sub1Component},
  {path: 'sub2' ,component: Sub2Component},
  {path: 'sub3' ,component: Sub3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
