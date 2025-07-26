import {Component, inject} from '@angular/core';
import {ProjetComponent} from './projet-component/projet.component';
import {IconeComponent} from '../icone-component/icone.component';
import {EmployeurService} from '../../services/employeur-service';
import {PeriodePipe} from '../../pipes/periode-pipe';

@Component({
  selector: 'app-experience-component',
  imports: [
    ProjetComponent,
    IconeComponent,
    PeriodePipe
  ],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss'
})
export class ExperienceComponent {
  private employeurService = inject(EmployeurService);

  employeurs = this.employeurService.employeurs;

}
