import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(products: Product[], isSortByPrice: boolean): Product[] {
    // let filteredByCategory: Product[] = products.filter((product) => {
    //   return product.idCategory === idCategory;
    // });

    if (isSortByPrice) {
      return products.sort((a, b) => a.price - b.price);
    }

    return products.sort((a, b) => b.rating - a.rating);
  }
}

// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1; }
//   if (a.value < b.value) {
//     return -1; }
//   return 0;
// });
