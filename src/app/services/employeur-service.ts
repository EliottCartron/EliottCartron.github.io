import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employeur} from '../models/employeur-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeurService {

  private readonly URL_DATA = `assets/data/employeurs.json`;
  private http = inject(HttpClient);

  private employeursSignal = signal<Employeur[]>([]);

  constructor() {
    this.chargerEmployeurs();
  }

  readonly employeurs = computed(() => this.employeursSignal());

  chargerEmployeurs() {
    this.http.get<Employeur[]>(this.URL_DATA).subscribe({
      next: (data) => this.employeursSignal.set(data)
    })
  }
}
