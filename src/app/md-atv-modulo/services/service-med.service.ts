import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMedService {

  constructor() { }

  public emitEvent = new EventEmitter();

  
  private lista: Array<{nome: string, preco:number}> = [];

  public getLista(){
    return this.lista;
  }

  public adiciona(valor: any){
    this.lista.push(valor);
    this.emitEvent.emit(this.lista.length);
  }
}
