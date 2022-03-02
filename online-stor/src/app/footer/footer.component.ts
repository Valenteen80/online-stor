import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// import { Component, OnInit } from '@angular/core';
// import { ButtonText } from 'src/app/mocks/enum';
// import { Category } from '../../interfases/category';
// import { Product } from '../../interfases/product';
// import { CATIGORIES } from '../../mocks/mock-categories';
// import { PRODUCTS } from '../../mocks/mock-products';

// @Component({
//   selector: 'app-main-page',
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.scss'],
// })
// export class MainPageComponent implements OnInit {
//   public categories: Category[] = CATIGORIES;
//   public filteredCategories: Category[] = this.categories;
//   public products: Product[] = PRODUCTS;
//   public filterProducts: Product[] = this.products;
//   public valueAttributeProductImg: string = 'photo';
//   public idSelectedCategory: number = 1;
//   public isSortByPrice: boolean = false;
//   public isSortByRaiting: boolean = true;

//   public search: string = '';
//   public placeholderValue: string = 'что ищите?';
//   public isFilterCategory: boolean = false;
//   public isFilterProduct: boolean = true;

//   constructor() {}

//   public searchToggle(event) {
//     this.isFilterProduct = !this.isFilterProduct;
//     this.search = '';
//     event.target.textContent = !this.isFilterProduct
//       ? ButtonText.BUTTON_FILTER_PRODUCT
//       : ButtonText.BUTTON_FILTER_CATEGORY;
//   }

//   public showDefaultProducts(id = null): void {
//     if (!id) {
//       this.filterProducts = this.products;
//       console.log(this.filterProducts);
//     } else {
//       this.filterProducts = this.products.filter((product) => {
//         return product.idCategory === id;
//       });
//     }
//   }

//   public onSelect(category: Category): void {
//     this.idSelectedCategory = category.id;
//     console.log(this.isFilterCategory);
//     if (this.isFilterCategory) {
//       return;
//     }
//     this.filterProducts = this.products.filter((product) => {
//       return product.idCategory === category.id;
//     });
//   }

//   public sort(toggleSort: string): void {
//     if (toggleSort === 'isSortByPrice') {
//       this.isSortByPrice = true;
//       this.isSortByRaiting = false;
//     } else {
//       this.isSortByPrice = false;
//       this.isSortByRaiting = true;
//     }
//   }

//   filterByCategory() {
//     if (this.isFilterProduct) {
//       this.showDefaultProducts();
//       console.log(this.isFilterProduct);
//       return;
//     }
//     console.log('dfdfffffff');
//     if (!this.search.trim() || this.isFilterProduct) {
//       this.filteredCategories = this.categories;
//     } else {
//       this.filteredCategories = this.categories.filter((category) =>
//         category.name.includes(this.search)
//       );
//     }
//   }

//   public addBasket(item) {
//     item.isBasket = !item.isBasket;

//   }

//   ngOnInit(): void {
//     this.showDefaultProducts(1);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { buttonTextEnum } from 'src/app/enums/buttonTextEnum';
// import { NameCategoryEnum } from 'src/app/enums/nameCategoryEnum';
// import { SortingService } from 'src/app/servises/sorting/sorting.service';
// import { Category } from '../../interfases/category';
// import { Product } from '../../interfases/product';
// import { CATIGORIES } from '../../mocks/mock-categories';
// import { PRODUCTS } from '../../mocks/mock-products';

// @Component({
//   selector: 'app-main-page',
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.scss'],
// })
// export class MainPageComponent implements OnInit {
//   public categories: Category[] = CATIGORIES;
//   public products: Product[] = PRODUCTS;

//   // public prefilteredByCategoriesProducts: Product[] = this.products;
//   public filterProducts: Product[] = this.products;
//   public valueAttributeProductImg: string = 'photo';
//   public idSelectedCategory: number = 1;
//   public isSortByPrice: boolean = false;
//   public isSortByRaiting: boolean = true;

//   public search: string = '';
//   public placeholderValue: string = 'что ищите?';
//   public isFilterCategory: boolean = false;
//   public isFilterProduct: boolean = true;

//   constructor(public sortingServise: SortingService) {}

//   // public searchToggle(event) {
//   //   this.isFilterProduct = !this.isFilterProduct;
//   //   this.search = '';
//   //   event.target.textContent = !this.isFilterProduct
//   //     ? ButtonText.BUTTON_FILTER_PRODUCT
//   //     : ButtonText.BUTTON_FILTER_CATEGORY;
//   // }

//   public showDefaultProducts(id = null): void {
//     if (!id) {
//       this.filterProducts = this.products;
//       console.log(this.filterProducts);
//     } else {
//       this.filterProducts = this.products.filter((product) => {
//         return product.idCategory === id;
//       });
//     }
//   }

//   public onSelectCategory(category: Category): void {
//     this.idSelectedCategory = category.id;
//     console.log(this.filterProducts);

//     this.filterProducts = this.products.filter((product) => {
//       return product.idCategory === category.id;
//     });

//     if (category.name === NameCategoryEnum.all_products) {
//       this.filterProducts = this.products;
//     }
//   }

//   public sort(toggleSort: string): void {
//     if (toggleSort === 'isSortByPrice') {
//       this.isSortByPrice = true;
//       this.isSortByRaiting = false;
//     } else {
//       this.isSortByPrice = false;
//       this.isSortByRaiting = true;
//     }
//   }

//   public addBasket(item) {
//     item.isBasket = !item.isBasket;
//     console.log(this.filterProducts);
//     this.sortingServise.sortByAddedToBasket(this.search);
//   }

//   filterByProdukt() {
//     // if (!this.search.trim()) {
//     //   this.filterProducts = this.filterProducts.filter(
//     //     (product) => (product.idCategory = this.idSelectedCategory)
//     //   );
//     //   console.log(this.filterProducts);
//     //   // this.filterProducts = this.products;
//     // } else {
//     //   this.filterProducts = this.filterProducts.filter((product) =>
//     //     product.name.includes(this.search)
//     //   );
//     // }
//     //   this.filterProducts = this.products.filter((product) => {
//     //     return product.idCategory === category.id;
//   }

//   ngOnInit(): void {
//     this.showDefaultProducts(1);
//     // console.log(NameCategory[0]);
//   }
// }
