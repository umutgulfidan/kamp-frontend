import { Component, OnInit } from '@angular/core';
import { Category } from '../../modules/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category = {categoryId:0,categoryName:""}

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  clearCurrentCategory(){
    this.currentCategory = {categoryId:0,categoryName:""}
  }


  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    }
    return 'list-group-item';
  }

  getAllCategoryClass() {
    if (this.currentCategory.categoryId==0) {
      return 'list-group-item active';
    }
    return 'list-group-item';
  }
}
