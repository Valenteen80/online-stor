import { Pipe, PipeTransform } from '@angular/core';

import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'sortByAddedToBasket',
})
export class SortByAddedToBasketPipe implements PipeTransform {
  transform(products: Product[]): Product[] {
    console.log(products);
    return products.sort((a: any, b: any) => b.isBasket - a.isBasket);
  }
}
