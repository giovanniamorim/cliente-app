import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiBaseURL + '/api/clientes';

  constructor(private http: HttpClient) { 
  }

  salvar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  getClientes() : Observable<Cliente[]>  {
    
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  getClientebyId(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  } 

  putCliente(cliente: Cliente) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deleteCliente(cliente: Cliente) : Observable<any>{
    return this.http.delete<Cliente>(`${this.apiURL}/${cliente.id}`);
  }


}
