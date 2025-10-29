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

  mudarCor(event: Event){
    const select = event.target as HTMLSelectElement | null;
    if(select){
      this.corSelecionada.emit(select.value);
    }
  }
}
