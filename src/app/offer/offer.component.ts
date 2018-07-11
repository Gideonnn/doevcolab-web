import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Models
import { Offer } from './models';

// Services
import { OfferService } from './services';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  form: FormGroup;
  offers: Offer[];

  constructor(private offerService: OfferService) {
    this.form = new FormGroup({
      customer: new FormControl('', Validators.required),
      buildingNumber: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      project: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.offerService
      .getAll()
      .subscribe(offers => {
        this.offers = offers;
      });
  }
}
