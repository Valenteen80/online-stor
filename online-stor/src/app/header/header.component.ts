import { Component, OnInit } from '@angular/core';
import { Category } from '../interfases/category';
// import { Product } from '../interfases/product';
// import { CATIGORIES } from '../mocks/mock-categories';
// import { PRODUCTS } from '../mocks/mock-products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public search: string = '';
  public placeholderValue: string = 'поиск по товарам';
  public isMouseenterProfile: boolean = false;
  // public categories: Category[] = CATIGORIES;
  // public products: Product[] = PRODUCTS;
  // public idSelectedCategory: number;
  // public isSortByPrice: boolean = false;
  // public isSortByRaiting: boolean = true;

  constructor() {}

  // public onSelect(category: Category): void {
  //   this.idSelectedCategory = category.id;
  //   console.log(category.id);
  // }

  // public sort(toggleSort: string): void {
  //   if (toggleSort === 'isSortByPrice') {
  //     this.isSortByPrice = true;
  //     this.isSortByRaiting = false;
  //   } else {
  //     this.isSortByPrice = false;
  //     this.isSortByRaiting = true;
  //   }
  // }

  ngOnInit(): void {}
}
