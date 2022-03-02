import { Pipe, PipeTransform } from '@angular/core';

import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'sortByAddedToBasket',
})
export class SortByAddedToBasketPipe implements PipeTransform {
  transform(products: Product[]): Product[] {
    console.log(products);
    return products.sort((a: any, b: any) => b.isBasket - a.isBasket);
    // console.log(products);
    // let afff = products.sort((a, b) => {
    //   // console.log(products);
    //   if (a.isBasket) {
    //     return 1;
    //   } else if (a.isBasket === b.isBasket) {
    //     return 0;
    //   } else {
    //     return -1;
    //   }
    // });
    // console.log(afff);
    // return afff;

    // let fff = products.sort((a) => {
    //   // console.log(products);

    //   if (a.isBasket) {
    //     console.log(a.isBasket);
    //     return 1;
    //   }
    //   // console.log(a);
    //   console.log(a.isBasket);
    //   return -1;
    // });
    // console.log(fff);
    // return fff;
    // if (isBasket) {
    //   return products.sort((a, b) => a.price - b.price);
    // }

    // return products.sort((a, b) => b.rating - a.rating);
  }
}
