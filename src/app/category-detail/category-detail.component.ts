import { Component, OnInit, Input } from '@angular/core';

import { CategoryDetailService } from './category-detail.service';

import { ICategoryDetail } from './model/ICategoryDetail';
import { ICategory } from '../category/model/ICategory';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  @Input() selectedCategory: ICategory;

  categoryDetail: ICategoryDetail;

  constructor(private categoryDetailService: CategoryDetailService) { }

  ngOnInit() {
    console.log(this.selectedCategory);
    this.categoryDetailService.getCategoryDetailById(this.selectedCategory.id).subscribe(response =>
      this.categoryDetail = response);
  }



}
