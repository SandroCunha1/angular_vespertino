import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMedService {

  constructor() { }

  public emitEvent = new EventEmitter();


  private lista: Array<{ nome: string, preco: number }> = [];

  private medicamento = {
    nome: "",
    preco: null
  }


  public getLista() {
    return this.lista;
  }


  public carregaMed(medicamento: any) {
    this.medicamento.nome = medicamento.nome;
    this.medicamento.preco = medicamento.preco;
    this.emitEvent.emit(this.medicamento)
    console.log(medicamento)
  }

  public adiciona(valor: any) {
    this.lista.push(valor);
    this.emitEvent.emit(this.lista.length);
  }
}
