import { Injectable } from '@angular/core';
// import { retry } from 'rxjs';
import { NameCategoryEnum } from 'src/app/enums/nameCategoryEnum';
import { Category } from 'src/app/interfases/category';
import { Product } from 'src/app/interfases/product';
// import { CATIGORIES } from 'src/app/mocks/mock-categories';
import { PRODUCTS } from 'src/app/mocks/mock-products';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  constructor() {}
  // private categories: Category[] = CATIGORIES;
  private products: Product[] = PRODUCTS;
  // private defaultProducts: Product[];
  private filteredProductByCategories: Product[];
  private sortedByAddBasket: Product[];

  setDefaultProducts(id = null): Product[] {
    this.filteredProductByCategories = this.products.filter((product) => {
      return product.idCategory === id;
    });
    return this.filteredProductByCategories.sort((a, b) => b.rating - a.rating);
  }

  filterBySelectCategory(category: Category, isSortByPrice): Product[] {
    this.filteredProductByCategories =
      category.name === NameCategoryEnum.all_products
        ? this.products
        : this.products.filter((product) => {
            return product.idCategory === category.id;
          });

    // if (category.name === NameCategoryEnum.all_products) {
    //   this.filteredProductByCategories = this.products;
    // } else {
    //   this.filteredProductByCategories = this.products.filter((product) => {
    //     return product.idCategory === category.id;
    //   });
    // }
    this.filteredProductByCategories = !isSortByPrice
      ? this.filteredProductByCategories.sort((a, b) => b.rating - a.rating)
      : this.filteredProductByCategories.sort((a, b) => a.price - b.price);

    // if (!isSortByPrice) {
    //   this.filteredProductByCategories = this.filteredProductByCategories.sort(
    //     (a, b) => b.rating - a.rating
    //   );
    // } else {
    //   this.filteredProductByCategories = this.filteredProductByCategories.sort(
    //     (a, b) => a.price - b.price
    //   );
    // }

    return this.sortByAddedToBasket(this.filteredProductByCategories);
  }

  public sortingByPrice(isSortByPrice): void {
    if (isSortByPrice) {
      this.filteredProductByCategories = this.filteredProductByCategories
        .sort((a, b) => a.price - b.price)
        .sort((a: any, b: any) => b.isBasket - a.isBasket);
    }
  }

  public sortingByRaiting(isSortByPrice): void {
    // this.filteredProductByCategories = !isSortByPrice ? :
    // if (!isSortByPrice) {
    this.filteredProductByCategories = this.filteredProductByCategories
      .sort((a, b) => b.rating - a.rating)
      .sort((a: any, b: any) => b.isBasket - a.isBasket);
    // }
  }

  //   if (isSortByPrice) {
  //     return products.sort((a, b) => a.price - b.price);
  //   }

  //   return products.sort((a, b) => b.rating - a.rating);
  // }
  //   return;
  // }

  sortByAddedToBasket(filterProducts): Product[] {
    this.sortedByAddBasket = filterProducts.sort(
      (a: any, b: any) => b.isBasket - a.isBasket
    );
    return this.sortedByAddBasket;
  }

  searchProduducts(search) {
    return !search.trim()
      ? this.filteredProductByCategories
      : this.filteredProductByCategories.filter((product) =>
          product.name.includes(search)
        );
    // if (!search.trim()) {
    //   return this.filteredProductByCategories;
    // } else {
    //   console.log(search);
    //   return this.filteredProductByCategories.filter((product) =>
    //     product.name.includes(search)
    //   );
    // }
  }
}

// this.filteredProductByCategories =
//   category.name === NameCategoryEnum.all_products
//     ? this.products
//     : this.products.filter((product) => {
//         return product.idCategory === category.id;
//       });
// return this.sortByAddedToBasket(this.filteredProductByCategories);
