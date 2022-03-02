import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(products: Product[], isSortByPrice: boolean): Product[] {
    if (isSortByPrice) {
      return products.sort((a, b) => a.price - b.price);
    }

    return products.sort((a, b) => b.rating - a.rating);
  }
}
