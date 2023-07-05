import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-imc',
  templateUrl: './form-imc.component.html',
  styleUrls: ['./form-imc.component.scss']
})
export class FormImcComponent implements OnInit {
  ngOnInit(): void {
    
  }

  public hover: string = "";
  public nome: string = "";
  pessoa ={
    nome: ""
  }

  public isEmpty(): boolean{
    if(this.pessoa.nome == ""){
      return false;
    }
    return true;
  }

  public classBtnHover(): string{
    if(!this.isEmpty()){
      this.hover = "btn-hover";
    }
    return this.hover;
  }
}
