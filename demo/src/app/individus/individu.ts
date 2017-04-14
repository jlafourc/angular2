

import {Type} from 'class-transformer';
export class Individu  {
  id: string;
  nom: string;
  prenom: string;

  @Type(() => Adresse)
  adresse: Adresse;

  get nomEtPrenom() {
    return `${this.nom} ${this.prenom}`;
  }
}


export class Adresse {
  cp: string;
}
