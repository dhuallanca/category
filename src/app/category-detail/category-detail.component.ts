import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { CategoryDetailService } from './category-detail.service';

import { ICategoryDetail } from './model/ICategoryDetail';
import { ICategory } from '../category/model/ICategory';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnChanges {
  @Input() selectedCategory: ICategory;

  categoryDetail: ICategoryDetail;

  constructor(private categoryDetailService: CategoryDetailService) { }

  ngOnChanges() {
    this.getDetail();
  }

  private getDetail() {
    this.categoryDetailService.getCategoryDetailById(this.selectedCategory.id).subscribe(response =>
      this.categoryDetail = response);
  }



}
