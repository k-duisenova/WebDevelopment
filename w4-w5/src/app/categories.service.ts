import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATEGORIES } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategory(id: number): Observable<any> {
    return of(CATEGORIES.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return of(CATEGORIES);
  }
}
