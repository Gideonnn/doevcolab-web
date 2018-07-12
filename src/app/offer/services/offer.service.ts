import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Models
import { ApiOffer, Offer } from '../models';

// Utils
import { toOffer } from '../utils/offer.utils';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  readonly base = 'http://localhost:3000/offers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Offer[]> {
    return this.http
      .get<ApiOffer[]>(this.base)
      .pipe(
        map(offers => offers.map(offer => toOffer(offer))),
        catchError((error: HttpErrorResponse) => throwError(error)),
      );
  }
}
