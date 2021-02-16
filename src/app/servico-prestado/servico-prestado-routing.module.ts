import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';


const routes: Routes = [
  { path: 'servico-prestado-form', component : ServicoPrestadoFormComponent },
  { path: 'servico-prestado-form/:id', component : ServicoPrestadoFormComponent },
  { path: 'servico-prestado-lista', component : ServicoPrestadoListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }