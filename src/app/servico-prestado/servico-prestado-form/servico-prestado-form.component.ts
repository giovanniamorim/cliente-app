import { ServicoPrestadoService } from './../servico-prestado.service';
import { ServicoPrestado } from './servicoPrestado';
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
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];
  //id: number;


  constructor(
    private clientesService : ClientesService,
    private service: ServicoPrestadoService
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe( response => this.clientes = response );
  }

  onSubmit(){
    this.service
      .salvarServico(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();
      }), errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
  }

}
