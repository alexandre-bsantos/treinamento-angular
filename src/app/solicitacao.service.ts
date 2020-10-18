import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lista } from './lista';
import { catchError, tap } from 'rxjs/operators';
import { MessagemService } from './messagem.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {
  atualizar(lista1: Lista[]) {
    throw new Error('Method not implemented.');
  }
  buscar(id: number) {
    throw new Error('Method not implemented.');
  }

  private solicitacaoUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messagemService: MessagemService) { }
  
  incluir(lista: Lista): Observable<Lista> {
    return this.http.post<Lista>(this.solicitacaoUrl, lista, this.httpOptions).pipe(
      tap((novaSolicitacao: Lista) => this.log(`Solicitação incluída com id=$(novaSolicitacao.id)`)),
      catchError(this.handleError<Lista>('incluir'))
    );
  }

  alterar(lista: Lista): Observable<any> {
    return this.http.put(this.solicitacaoUrl, lista, this.httpOptions).pipe(
      tap(_ => this.log(`Solicitação atualizada id=${lista.id}`)),
      catchError(this.handleError<any>('alterar'))
    );
  }

  deletar(lista: Lista | number): Observable<Lista> {
    const id = typeof lista === 'number' ? lista : lista.id;
    const url = `${this.solicitacaoUrl}/${id}`;

    return this.http.delete<Lista>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Solicitacao deletada id=${id}`)),
      catchError(this.handleError<Lista>('deletar'))
    );
  }

  buscarPorId(id: number): Observable<Lista> {
    const url = `${this.solicitacaoUrl}/${id}`;
    return this.http.get<Lista>(url).pipe(
      tap(_ => this.log(`Solicitacao buscada id=${id}`))
    );
  }
  
  /**
  @param operation - nome da operação que falhou
  @param result - valor opcional que retorna como o resultado observavel
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  private log(message: string){
    this.messagemService.add(`SolicitacaoService: ${message}`);
  }
}
