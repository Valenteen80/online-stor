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

///////////////////////////////////////////////////////////

// export class FilterPipe implements PipeTransform {
//   transform(newArticles: Article[], search: string = ''): Article[] {
//     if (!search.trim()) {
//       return newArticles;
//     }

//     return newArticles.filter((newArticle: Article) => {
//       return (
//         newArticle.title.includes(search) ||
//         newArticle.description.includes(search) ||
//         newArticle.content.includes(search)
//       );
//     });
//   }
// }
