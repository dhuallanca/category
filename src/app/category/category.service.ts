import { Injectable } from '@angular/core';
import { CATEGORIES } from '../mock/category';
import { ICategory } from './model/ICategory';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<ICategory[]> {
    return Observable.of(CATEGORIES);
  }
}
