import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaudacaoComponent } from './components/saudacao/saudacao.component';
import { SegundoComponent } from './components/segundo/segundo.component';

const routes: Routes = [
  {path: "", component: SaudacaoComponent },
  {path: "segundo", component: SegundoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
