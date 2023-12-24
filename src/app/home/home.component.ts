import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
})

export class HomeComponent {
  filtered_location_list : HousingLocation[] = [];
  housing_location_list : HousingLocation[] = [];
  housing_service: HousingService = inject(HousingService);

  filter_results(text: string) {
    if (!text) {
      this.filtered_location_list = this.housing_location_list;
    } else {
      this.filtered_location_list = this.housing_location_list.filter((housing_location) =>
        housing_location?.city.toLowerCase().includes(text.toLowerCase()),
      );
    }
  }
  
  constructor() {
    this.housing_location_list = this.housing_service.getAllHousingLocations();
    this.filter_results("");
  }
}
