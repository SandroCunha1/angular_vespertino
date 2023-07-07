import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent {
  descricao: string = "";
  url: string = "";
  px!: number;

  public listImg: any = [];

  public addImg(){
    this.listImg.push({descricao: this.descricao , url: this.url, px: this.px});
  }
}
