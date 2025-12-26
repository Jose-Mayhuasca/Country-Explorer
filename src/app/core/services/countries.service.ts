import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Country } from '../models/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  /**
   * Obtiene todos los países
   * Filtramos los campos para que la petición sea ligera (?fields=...)
   */
  getAllCountries(): Observable<Country[]> {
    const url = `${this.apiUrl}/all?fields=name,capital,cca3,flags,population,region`;
    return this._http.get<Country[]>(url);
  }

  /**
   * Busca un país por su código (para la vista de detalle)
   */
  getCountryByCode(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this._http.get<Country[]>(url);
  }

  /**
   * Buscador por nombre
   */
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this._http.get<Country[]>(url);
  }
}
