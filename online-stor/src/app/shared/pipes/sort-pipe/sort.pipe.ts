import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    products: Product[],
    idCategory: number = 1,
    isSortByPrice: boolean
  ): Product[] {
    let filteredByCategory: Product[] = products.filter((product) => {
      return product.idCategory === idCategory;
    });

    if (isSortByPrice) {
      return filteredByCategory.sort((a, b) => a.price - b.price);
    }
    return filteredByCategory.sort((a, b) => b.rating - a.rating);
  }
}
