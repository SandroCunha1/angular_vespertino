import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { FormImcComponent } from './form-imc/form-imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgModelComponent } from './diretiva-ng-model/diretiva-ng-model.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';

const routes: Routes = [
  {path: 'exemplo', component: ExemploBindingComponent},
  {path: 'imc', component: FormImcComponent},
  {path: 'class', component: DiretivaNgClassComponent},
  {path: 'for', component: DiretivaNgForComponent},
  {path: 'if', component: DiretivaNgIfComponent},
  {path: 'model', component: DiretivaNgModelComponent},
  {path: 'style', component: DiretivaNgStyleComponent},
  {path: 'switch', component: DiretivaNgSwitchComponent},
  {path: 'pipes', component: ExemploPipesComponent},
  {path: 'microondas', component: MicroondasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
