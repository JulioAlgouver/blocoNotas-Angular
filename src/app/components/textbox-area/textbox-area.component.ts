import { Component } from '@angular/core';

@Component({
  selector: 'app-textbox-area',
  templateUrl: './textbox-area.component.html',
  styleUrl: './textbox-area.component.scss'
})
export class TextboxAreaComponent {
  texto = '';
  tamanhoFonte = 10;
  corTexto = 'black';

  mudarCor(cor: string) {
    this.corTexto = cor;
  }

  mudarTamanhoFonte(tamFonte:number){
    this.tamanhoFonte = tamFonte;
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }
}
