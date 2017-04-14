import { Injectable } from '@angular/core';
import {Individu} from './individu';
import {plainToClass} from 'class-transformer';

@Injectable()
export class IndividusService {

  individus = [
    { id: '1', nom: 'Doe', prenom: 'John' },
    { id: '2', nom: 'Bar', prenom: 'Foo' }
  ];

  constructor() { }

  findAllIndividus(): Individu[] {
    return plainToClass(Individu, this.individus);
  }

  findById(id: string): Individu {
    return plainToClass(Individu, this.individus.find(ind => {
      return ind.id == id;
    }));
  }

  ajouter(nom: string, prenom: string) {
    
  }

}
