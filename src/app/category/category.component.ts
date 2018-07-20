import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { ICategory } from './model/ICategory';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: ICategory[] = [];
  selectedCategory: ICategory;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

  onSelect(category: ICategory) {
    console.log(category);
    this.selectedCategory = category;
  }

}
