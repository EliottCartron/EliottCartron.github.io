import {Component, inject} from '@angular/core';
import {IconeComponent} from '../icone-component/icone.component';
import {CertificationService} from '../../services/certification-service';

@Component({
  selector: 'app-certifications-component',
  imports: [
    IconeComponent
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
private certifService = inject(CertificationService);

certifs = this.certifService.certifs;
}
