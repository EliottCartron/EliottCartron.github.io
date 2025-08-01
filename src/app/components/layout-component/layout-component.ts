import { Component } from '@angular/core';
import {AProposComponent} from '../a-propos-component/a-propos-component';
import {TechnologiesComponent} from '../technologies-component/technologies-component';
import {ExperienceComponent} from '../experience-component/experience-component';
import {ContactComponent} from '../contact-component/contact-component';
import {CertificationsComponent} from '../certifications-component/certifications.component';

@Component({
  selector: 'app-layout-component',
  imports: [
    AProposComponent,
    TechnologiesComponent,
    ExperienceComponent,
    ContactComponent,
    CertificationsComponent
  ],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss'
})
export class LayoutComponent {

}
