import { CommonModule, KeyValuePipe, Location } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { CountriesService } from '../../core/services/countries.service';
import { Country } from '../../core/models/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  imports: [CommonModule, KeyValuePipe, RouterLink],
  templateUrl: './country-detail.html',
  styleUrl: './country-detail.scss',
})
export class CountryDetail {
  private _countriesService = inject(CountriesService);
  private location = inject(Location);

  id = input.required<string>();
  country = signal<Country | null>(null);
  loading = signal<boolean>(true);

  // Constructor: Usamos un 'effect' para reaccionar cuando el ID cambia
  constructor() {
    effect(() => {
      // Cada vez que 'this.id()' cambie (ej: click en frontera), esto se ejecuta
      const currentId = this.id();
      this.loadCountryData(currentId);
    });
  }

  private loadCountryData(code: string) {
    this.loading.set(true);

    this._countriesService.getCountryByCode(code).subscribe({
      next: (countries: any) => {
        if (Array.isArray(countries)) {
          if (countries.length > 0) {
            this.country.set(countries[0]);
          }
        } else {
          this.country.set(countries);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error del API:', err);
        this.loading.set(false);
      },
    });
  }

  goBack() {
    this.location.back();
  }

  // Helper para obtener el primer nombre nativo disponible
  getNativeName(name: any): string {
    if (!name.nativeName) return name.common;
    const firstKey = Object.keys(name.nativeName)[0];
    return name.nativeName[firstKey].common;
  }
}
