import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housing_location_id = -1;
  housing_location : HousingLocation | undefined;
  housing_service: HousingService = inject(HousingService);

  constructor() {
    const housing_location_id = Number(this.route.snapshot.params['id']);
    this.housing_location = this.housing_service.getHousingLocationById(housing_location_id);
    console.log("id",this.route.snapshot.params['id']);
  }
}
