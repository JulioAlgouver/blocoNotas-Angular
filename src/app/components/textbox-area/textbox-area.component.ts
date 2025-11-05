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
  fontWeight = 'normal';
  isBold = false;
  isItalic = false;
  isUnderline = false;

  mudarCor(cor: string) {
    this.corTexto = cor;
  }

  mudarTamanhoFonte(tamFonte:number){
    this.tamanhoFonte = tamFonte;
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }

  diminuirFonte(){
    this.tamanhoFonte -= 2;
  }

  toggleNegrito() {
    this.isBold = !this.isBold;
    this.fontWeight = this.isBold ? 'bold' : 'normal';
  }

  toggleItalico(){
    this.isItalic = !this.isItalic;
  }

  toggleSublinhado(){
    this.isUnderline = !this.isUnderline;
  }
}
