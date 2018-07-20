import { Injectable } from '@angular/core';
import { CATEGORIES } from '../mock/category';
import { ICategory } from './model/ICategory';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<ICategory[]> {
    return Observable.of(CATEGORIES);
  }
}
