import {Periode} from './periode-model';
import {Icone} from './icone-model';
import {Techno} from './techno-model';

export interface Projet {
  id: number,
  nom: string,
  icone: Icone,
  equipe: string
  periode: Periode,
  description: string,
  technosSpecifiques: Techno[]
}
