import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(
    private clientesService : ClientesService
  ) { }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe( response => this.clientes = response );
  }

  onSubmit(){
    console.log('Submit')
  }

}
