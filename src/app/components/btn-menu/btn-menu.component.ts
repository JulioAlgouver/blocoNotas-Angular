import { Component, EventEmitter, Output } from '@angular/core';

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
}
