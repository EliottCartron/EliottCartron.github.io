import {Component, input} from '@angular/core';
import {IconeComponent} from '../../icone-component/icone.component';
import {Projet} from '../../../models/projet-model';
import {PeriodePipe} from '../../../pipes/periode-pipe';

@Component({
  selector: 'app-projet-component',
  imports: [
    IconeComponent,
    PeriodePipe
  ],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss'
})
export class ProjetComponent {
  projet = input.required<Projet>();
}
