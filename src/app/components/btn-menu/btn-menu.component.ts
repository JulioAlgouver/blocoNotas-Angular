import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrl: './btn-menu.component.scss'
})
export class BtnMenuComponent {

  @Output() comando = new EventEmitter<string>();
  @Output() corSelecionada = new EventEmitter<string>();
  @Output() tamanhoSelecionado = new EventEmitter<number>();
  @Output() aumentarFonte = new EventEmitter<void>()
  @Output() diminuirFonte = new EventEmitter<void>()
  @Output() negrito = new EventEmitter<void>();
  @Output() italico = new EventEmitter<void>();
  @Output() sublinhado = new EventEmitter<void>();
  @Output() textoCentro = new EventEmitter<void>()
  @Output() textoEsquerda = new EventEmitter<void>();
  @Output() textoDireita = new EventEmitter<void>();
  @Output() textoJustificado = new EventEmitter<void>();

  mudarCor(event: Event){
    const selectCor = event.target as HTMLSelectElement | null;
    if(selectCor){
      this.corSelecionada.emit(selectCor.value);
    }
  }

  mudarTamanhoFonte(event:Event){
    const selectTamanho = event.target as HTMLSelectElement | null;
    if(selectTamanho){
      this.tamanhoSelecionado.emit(Number(selectTamanho.value));
    }
  }

  onAumentarFonte(){
    this.aumentarFonte.emit();
  }

  onDiminuirFonte(){
    this.diminuirFonte.emit()
  }

  setNegrito(){
    this.negrito.emit()
  }

  setItalico(){
    this.italico.emit()
  }

  setUnderscore(){
    this.sublinhado.emit()
  }

  alinharEsquerda(){
    this.textoEsquerda.emit()
  }

  alinharCentralizado(){
    this.textoCentro.emit()
  }

  alinharDireita(){
    this.textoDireita.emit()
  }

  alinharJustificado(){
    this.textoJustificado.emit()
  }
}