import { Component, OnInit } from '@angular/core';
import { ButtonTextEnum } from 'src/app/enums/buttonTextEnum';
import { SortingService } from 'src/app/servises/sorting/sorting.service';
import { Category } from '../../interfases/category';
import { Product } from '../../interfases/product';
import { CATIGORIES } from '../../mocks/mock-categories';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATIGORIES;
  public filterProducts: Product[];
  public valueAttributeProductImg: string = 'photo';
  public idSelectedCategory: number = 1;
  public isSortByPrice: boolean = false;
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

  public toggleSortingByRaiting(): void {
    this.isSortByPrice = false;
    this.sortingServise.sortingByRaiting();
  }
  public toggleSortingByPrice(): void {
    this.isSortByPrice = true;
    this.sortingServise.sortingByPrice();
  }

  public addBasket(item): void {
    item.isBasket = !item.isBasket;

    item.buttonTextEnum = item.isBasket
      ? ButtonTextEnum.BUTTON_ADD_TO_BASKET
      : ButtonTextEnum.BUTTON_IN_BASKET;

    this.filterProducts = this.sortingServise.sortByAddedToBasket(
      this.filterProducts
    );
  }

  filterByProdukt(): void {
    this.sortingServise.streamSearch$.subscribe((value) => {
      this.filterProducts = this.sortingServise.searchProduducts(value);
    });
  }

  ngOnInit(): void {
    this.showDefaultProducts();
    this.filterByProdukt();
  }
}
