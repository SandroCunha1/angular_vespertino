import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-imc',
  templateUrl: './table-imc.component.html',
  styleUrls: ['./table-imc.component.scss']
})
export class TableImcComponent {

  @Input()
  pessoa = {
    nome:"Sandro Medeiros da Cunha",
    peso: "",
    altura: "",
    sexo: "",
    imc: 0,
    avaliacao: "Avaliação"
  }

  public getImg(){
    if(this.pessoa.avaliacao == "Peso normal"){
      return "https://www.pngmart.com/files/15/Happy-Emoji-PNG.png"
    }else{
      return "https://freepngimg.com/thumb/sad_emoji/36900-6-sad-emoji-transparent-background-thumb.png"
    }
  }

  public colorSex(): string{
    if(this.pessoa.sexo == "m"){
      return "blue"
    }else{
      return "pink"
    }
  }
  }


