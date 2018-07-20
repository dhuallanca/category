import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ICategoryDetail } from './model/ICategoryDetail';
import { CATEGORIESDETAIL } from '../mock/category-detail';

@Injectable()
export class CategoryDetailService {

  constructor() { }

  getCategoryDetailById(categoryId: number): Observable<ICategoryDetail> {
    const detailFound = CATEGORIESDETAIL.find(detail => detail.category.id === categoryId);
    return Observable.of(detailFound);
  }

}
