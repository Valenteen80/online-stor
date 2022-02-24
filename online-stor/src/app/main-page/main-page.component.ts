import { Component, OnInit } from '@angular/core';
import { Category } from '../interfases/category';
import { Product } from '../interfases/product';
import { CATIGORIES } from '../mocks/mock-categories';
import { PRODUCTS } from '../mocks/mock-products';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public search: string = '';
  public placeholderValue: string = 'поиск по товарам';
  public isMouseenterProfile: boolean = false;
  public categories: Category[] = CATIGORIES;
  public products: Product[] = PRODUCTS;
  // public selectedCategory: Category;
  public idSelectedCategory: number;
  public isVisibleProduct: boolean = true;

  constructor() {}

  public onSelect(category: Category): void {
    // this.selectedCategory = category;
    this.idSelectedCategory = category.id;
  }

  ngOnInit(): void {}
}
