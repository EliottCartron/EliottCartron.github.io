import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employeur} from '../models/employeur-model';
import {Certif} from '../models/certif-model';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private readonly URL_DATA = `assets/data/certifications.json`;
  private http = inject(HttpClient);

  private certifsSignal = signal<Certif[]>([]);

  constructor() {
    this.chargerCertifs();
  }

  readonly certifs = computed(() => this.certifsSignal());

  chargerCertifs() {
    this.http.get<Employeur[]>(this.URL_DATA).subscribe({
      next: (data) => this.certifsSignal.set(data)
    })
  }
}
