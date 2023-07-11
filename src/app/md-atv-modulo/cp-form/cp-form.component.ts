import { Component } from '@angular/core';
import { ServiceMedService } from '../services/service-med.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})

export class CpFormComponent {

  constructor(private service: ServiceMedService){}

  public listaMed = {
    nome: "",
    preco: null
  }

  public addItem(valor: any){
    let lista = {
      nome: valor.nome,
      preco: valor.preco
    }
    this.listaMed = {
      nome: "",
      preco: null
    }
    return this.service.adiciona(lista)
  }
}
