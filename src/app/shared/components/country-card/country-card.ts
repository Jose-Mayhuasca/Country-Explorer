import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../../core/models/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-card',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-card.html',
  styleUrl: './country-card.scss',
})
export class CountryCard {
  country = input.required<Country>();
}
