import { Pipe, PipeTransform } from '@angular/core';
import {Periode} from '../models/periode-model';

@Pipe({
  name: 'periode'
})
export class PeriodePipe implements PipeTransform {

  transform(periode: Periode): string {
    const debut = periode.moisDebut.concat(' ', periode.anneeDebut);
    let fin;

    if (periode.moisFin == null || periode.anneeFin == null) {
      fin = `maintenant`;
    } else {
      fin = periode.moisFin.concat(' ', periode.anneeFin);
    }

    return debut + ` à ` + fin;
  }

}
