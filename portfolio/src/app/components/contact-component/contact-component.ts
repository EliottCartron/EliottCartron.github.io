import {Component, inject} from '@angular/core';
import {IconeComponent} from '../icone-component/icone.component';
import {ContactService} from '../../services/contact-service';

@Component({
  selector: 'app-contact-component',
  imports: [
    IconeComponent
  ],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss'
})
export class ContactComponent {
  private contactService = inject(ContactService);

  contacts = this.contactService.contacts;
}
