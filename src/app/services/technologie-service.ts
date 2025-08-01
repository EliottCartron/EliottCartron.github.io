import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employeur} from '../models/employeur-model';
import {Techno} from '../models/techno-model';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

  private readonly URL_DATA = `assets/data/technologies.json`;
  private http = inject(HttpClient);

  private technosSignal = signal<Techno[]>([]);

  constructor() {
    this.chargerTechnos();
  }

  readonly technos = computed(() => this.technosSignal());

  chargerTechnos() {
    this.http.get<Employeur[]>(this.URL_DATA).subscribe({
      next: (data) => this.technosSignal.set(data)
    })
  }
}
