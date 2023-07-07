import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent {
  public x: number = 1;
  public y: number = 1;
  public blur: number = 1;
  public radius: number = 1;

  public plusRate: number = 5;
  public plusX(): void {
    this.x += this.plusRate;
  }

  public plusY(): void {
    this.y += this.plusRate;
  }

  public plusBlur(): void {
    this.blur += this.plusRate;
  }

  public plusRadio(): void {
    this.radius += this.plusRate;
  }

  public minusX(): void {
    this.x -= this.plusRate;
  }

  public minusY(): void {
    this.y -= this.plusRate;
  }

  public minusBlur(): void {
    this.blur -= this.plusRate;
  }

  public minusRadio(): void {
    this.radius -= this.plusRate;
  }


}
