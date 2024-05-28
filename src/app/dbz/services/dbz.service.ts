import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'; //lo utilizo para crear identificadores unicos pero primero es importante instalar con npm i uuid y luego instalo este npm i --save-dev @types/uuid

@Injectable({providedIn: 'root'})
export class DbzService {

  public character: Character[] = [
    {
      id: uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void{

    const newCharacter:Character ={
      id:uuid(), ...character //Lo que hago aqui es decirle pasale todas las propiedades del character
    };

     this.character.push(newCharacter);

  }

  /*onDeleteCharacter(index: number){
    this.character.splice(index,1); // solo borra el elemento selecccionado
  }*/
  deleteCharacterById(id:string){
    this.character = this.character.filter(character => character.id !== id);
  }

}
