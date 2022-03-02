import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], search: string = ''): Product[] {
    if (!search.trim()) {
      return products;
    }
    return products.filter((product) => {
      return product.name.includes(search);
    });
  }
}
