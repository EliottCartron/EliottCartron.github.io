import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employeur} from '../models/employeur-model';
import {Contact} from '../models/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly URL_DATA = `assets/data/contacts.json`;
  private http = inject(HttpClient);

  private contactsSignal = signal<Contact[]>([]);

  constructor() {
    this.chargerContacts();
  }

  readonly contacts = computed(() => this.contactsSignal());

  chargerContacts() {
    this.http.get<Employeur[]>(this.URL_DATA).subscribe({
      next: (data) => this.contactsSignal.set(data)
    })
  }
}
