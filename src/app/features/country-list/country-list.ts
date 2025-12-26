import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CountriesService } from '../../core/services/countries.service';
import { Country } from '../../core/models/country.interface';
import { CountryCard } from '../../shared/components/country-card/country-card';

@Component({
  selector: 'app-country-list',
  imports: [CountryCard],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList implements OnInit {
  private _countriesService = inject(CountriesService);

  private countries = signal<Country[]>([]);

  searchTerm = signal('');
  regionFilter = signal('');

  filteredCountries = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const region = this.regionFilter();
    const list = this.countries();

    return list.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(term);
      const matchesRegion = region ? country.region === region : true;
      return matchesSearch && matchesRegion;
    });
  });

  ngOnInit(): void {
    this._countriesService.getAllCountries().subscribe((data) => {
      this.countries.set(data);
    });
  }

  updateRegion(region: string) {
    this.regionFilter.set(region);
  }
}
