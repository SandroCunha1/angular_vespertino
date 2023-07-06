import { Component } from '@angular/core';

@Component({
  selector: 'app-form-imc',
  templateUrl: './form-imc.component.html',
  styleUrls: ['./form-imc.component.scss']
})
export class FormImcComponent  {
 

  pessoa = {
    nome:"",
    peso: "",
    altura: "",
    sexo: "",
    imc: 0,
    avaliacao: ""
  }
  pessoas: any = []
  public hover: string = ""

  public isEmpty(): boolean{
    if(this.pessoa.nome == "" 
    || this.pessoa.peso == null 
    || this.pessoa.peso == ""
    || this.pessoa.altura == null 
    || this.pessoa.altura == ""
    || this.pessoa.sexo == ''){
      return true;
    }
    return false;
  }

  public classBtnHover(): string{
    if(!this.isEmpty()){
      return this.hover = "btn-hover";
    }
    return this.hover = "";
  }

  public getForm(): void{
    this.calcImc();
    this.pessoas.push(this.pessoa)
    this.cleanForm();
    
  }

  public calcImc(): void{
    this.pessoa.imc = Number( this.pessoa.peso) / Number(this.pessoa.altura) ** 2;
    this.pessoa.imc = Number (this.pessoa.imc.toFixed(2))
    if (this.pessoa.sexo == "m" && this.pessoa.imc < 19 || this.pessoa.sexo == "f" && this.pessoa.imc < 18) {
      this.pessoa.avaliacao = 'Abaixo do peso';
  } else if (this.pessoa.sexo == "m" && this.pessoa.imc < 25 || this.pessoa.sexo == "f" && this.pessoa.imc < 24) {
      this.pessoa.avaliacao = 'Peso normal';
  } else if (this.pessoa.sexo == "m" && this.pessoa.imc < 32 || this.pessoa.sexo == "f" && this.pessoa.imc < 29) {
      this.pessoa.avaliacao = 'Sobrepeso';
  } else {
      this.pessoa.avaliacao = 'Obesidade';
  }
  }

  public cleanForm(): void{
    this.pessoa = {
      nome:"",
      peso: "",
      altura: "",
      sexo: "",
      imc: 0,
      avaliacao: ""
    }
  }

 
}
