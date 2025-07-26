import {Periode} from './periode-model';
import {Projet} from './projet-model';
import {Icone} from './icone-model';

export interface Employeur {
  id: number,
  nom: string,
  icone: Icone,
  periode: Periode,
  description: string,
  projets: Projet[]
}
