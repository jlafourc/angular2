
import {Individu} from './individu';
import {plainToClass} from 'class-transformer';
describe('On créé un individu à partir des data', () => {

  it('On créé un individu à partir des data', () => {
    const individu = plainToClass(Individu, { nom: 'Doe', prenom: 'John', adresse: {cp: '64000'} });
    expect(individu.nomEtPrenom).toBe('Doe John');
    expect(individu.adresse.cp).toBe('64000');
  });

});
