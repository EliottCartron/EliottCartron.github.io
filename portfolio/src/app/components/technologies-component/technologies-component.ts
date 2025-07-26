import {Component, inject} from '@angular/core';
import {IconeComponent} from '../icone-component/icone.component';
import {TechnologieService} from '../../services/technologie-service';

@Component({
  selector: 'app-technologies-component',
  imports: [
    IconeComponent
  ],
  templateUrl: './technologies-component.html',
  styleUrl: './technologies-component.scss'
})
export class TechnologiesComponent {
  private technoService = inject(TechnologieService);

  technos = this.technoService.technos;
}
