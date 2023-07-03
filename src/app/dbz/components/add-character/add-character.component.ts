import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {


  //Crea un evento identificable por el dom, el cual debe de recibir 
  //un dato de tipo character, cuando se hace el llamado del mismo
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;
    //Llama la variable la cual es un evento y la emite ( LA HACE VISIBLE PARA EL DOM)
    //y le manda la variable pertinente
    this.onNewCharacter.emit(this.character);

    /* this.character.name = '';
    this.character.power = 0; */
  }
}
