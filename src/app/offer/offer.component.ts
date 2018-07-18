import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Models
import { Offer, ProductGroup } from './models';

// Services
import { OfferService, ProductGroupService } from './services';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  addedProductIds: { [key: string]: number };
  form: FormGroup;
  offers: Offer[];
  productGroups: ProductGroup[];

  constructor(
    private offerService: OfferService,
    private productGroupService: ProductGroupService,
  ) {
    this.addedProductIds = {};
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

    this.productGroupService
      .getAll()
      .subscribe(productGroups => {
        this.productGroups = productGroups;
      });
  }

  onAddProduct(productId: string) {
    if (this.addedProductIds[productId]) {
      this.addedProductIds[productId]++;
    } else {
      this.addedProductIds[productId] = 1;
    }
  }

  onRemoveProduct(productId: string) {
    if (this.addedProductIds[productId]) {
      this.addedProductIds[productId]--;

      if (this.addedProductIds[productId] <= 0) {
        delete this.addedProductIds[productId];
      }
    } else {
      this.addedProductIds[productId] = 1;
    }
  }
}
