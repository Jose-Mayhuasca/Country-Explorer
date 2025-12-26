import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from './core/services/countries.service';
import { Observable } from 'rxjs';
import { Country } from './core/models/country.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private _countriesService = inject(CountriesService);
  countries$!: Observable<Country[]>;

  ngOnInit(): void {
    this._countriesService.getAllCountries().subscribe({
      next: (data) => {
        console.log('¡Datos recibidos!: ', data.slice(0, 3)); // Muestra los primeros 3
      },
      error: (err) => console.error('Error conectando a la API', err),
    });
  }
}
