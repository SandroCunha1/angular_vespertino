import { Component, OnInit } from '@angular/core';
import { ServiceMedService } from '../services/service-med.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {
  public lista: Array<{ nome: string, preco: number }> = [];

  constructor(private service: ServiceMedService) { }

  carregaMedicamento(medicamento: any) {
    this.service.carregaMed(medicamento)
  }
  
  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

}
