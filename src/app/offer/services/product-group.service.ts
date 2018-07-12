import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Models
import { ApiProductGroup, ProductGroup } from '../models';

// Utils
import { toProductGroup } from '../utils/offer.utils';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {

  readonly base = 'http://localhost:3000/productgroups';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductGroup[]> {
    return this.http
      .get<ApiProductGroup[]>(`${this.base}/populated`)
      .pipe(
        map(productGroups => productGroups.map(productGroup => toProductGroup(productGroup))),
        catchError((error: HttpErrorResponse) => throwError(error)),
      );
  }
}
