import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfases/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], idCategory: number = 1): Product[] {
    return products.filter((product) => {
      return product.idCategory === idCategory;
    });
  }
}
