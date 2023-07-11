import { Component, OnInit } from '@angular/core';
import { ServiceMedService } from '../services/service-med.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})

export class CpFormComponent implements OnInit {

  public listaMed = {
    nome: "",
    preco: null
  }

  constructor(private service: ServiceMedService) { }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: any) => this.listaMed = res
    })
  }
  public addItem(valor: any) {
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
