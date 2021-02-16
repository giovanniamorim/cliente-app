import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 

  }

  salvar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes() : Observable<Cliente[]>  {
    
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getClientebyId(id: number) : Observable<Cliente> {
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  } 

  putCliente(cliente: Cliente) : Observable<any> {
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(cliente: Cliente) : Observable<any>{
    return this.http.delete<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }


}