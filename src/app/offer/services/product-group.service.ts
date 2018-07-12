import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Models
import { ProductGroup } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {

  readonly base = 'http://localhost:3000/productgroups';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductGroup[]> {
    return this.http
      .get<ProductGroup[]>(`${this.base}/populated`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
