import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{ name: 'trunks', power: 10 }];

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //emitir el id del personaje
    //console.log(index);
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
