import { Component, OnInit } from '@angular/core';
import { ButtonTextEnum } from 'src/app/enums/buttonTextEnum';
import { SortingService } from 'src/app/servises/sorting/sorting.service';
import { Category } from '../../interfases/category';
import { Product } from '../../interfases/product';
import { CATIGORIES } from '../../mocks/mock-categories';
import { PRODUCTS } from '../../mocks/mock-products';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATIGORIES;
  public products: Product[] = PRODUCTS;

  public filterProducts: Product[] = this.products;
  public valueAttributeProductImg: string = 'photo';
  public idSelectedCategory: number = 1;
  public isSortByPrice: boolean = false;
  // public isSortByRaiting: boolean = true;

  public search: string = '';
  public placeholderValue: string = 'что ищите?';
  public isFilterCategory: boolean = false;
  public isFilterProduct: boolean = true;

  constructor(public sortingServise: SortingService) {}

  public showDefaultProducts(): void {
    this.filterProducts = this.sortingServise.setDefaultProducts(1);
  }

  public onSelectCategory(category: Category): void {
    this.idSelectedCategory = category.id;
    this.filterProducts = this.sortingServise.filterBySelectCategory(
      category,
      this.isSortByPrice
    );
  }
  // toggleSortingByRaiting
  // toggleSortingByPrice
  public toggleSortingByRaiting() {
    this.isSortByPrice = false;
    this.sortingServise.sortingByRaiting(this.isSortByPrice);
  }
  public toggleSortingByPrice() {
    this.isSortByPrice = true;
    this.sortingServise.sortingByPrice(this.isSortByPrice);
  }

  // public sort(toggleSort: string): void {
  //   if (toggleSort === 'isSortByPrice') {
  //     this.isSortByPrice = true;
  //     this.isSortByRaiting = false;
  //   } else {
  //     this.isSortByPrice = false;
  //     this.isSortByRaiting = true;
  //   }
  // }

  public addBasket(item) {
    item.isBasket = !item.isBasket;
    item.buttonTextEnum = item.isBasket
      ? ButtonTextEnum.BUTTON_ADD_TO_BASKET
      : ButtonTextEnum.BUTTON_IN_BASKET;
    // console.log(item.buttonTextEnum);
    // console.log(item);
    this.filterProducts = this.sortingServise.sortByAddedToBasket(
      this.filterProducts
    );
  }

  filterByProdukt() {
    this.filterProducts = this.sortingServise.searchProduducts(this.search);
  }

  ngOnInit(): void {
    this.showDefaultProducts();
  }
}
