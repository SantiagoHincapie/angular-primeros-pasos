import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { name: 'kakaroto', power: 12345, id: uuid() },
    { name: 'krilin', power: 123, id: uuid() },
    { name: 'vegetta', power: 12344, id: uuid() },
  ];

  addCharacter(character: Character): void {
    //console.log(character);
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    //this.characters.splice(i, 1);
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  constructor() {}
}
