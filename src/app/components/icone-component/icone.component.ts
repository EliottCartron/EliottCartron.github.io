import {Component, input} from '@angular/core';
import {Icone} from '../../models/icone-model';

@Component({
  selector: 'app-icone-component',
  imports: [],
  templateUrl: './icone.component.html',
  styleUrl: './icone.component.scss'
})
export class IconeComponent {
  CHEMIN_IMAGE = `/assets/icons/`;

  icone = input.required<Icone>();
  afficherNom = input.required<boolean>();
  nomAffiche = input.required<string>();
  isSmaller = input<boolean>();

  protected buildSrc(nomIcone: string) {
    return this.CHEMIN_IMAGE + this.icone().dossier + "/" + nomIcone;
  }
}
