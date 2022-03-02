import { ButtonTextEnum } from '../enums/buttonTextEnum';
import { NameCategoryEnum } from '../enums/nameCategoryEnum';

export interface Product {
  id: number;
  idCategory: number;
  name: string;
  img: string;
  description: string;
  price: number;
  rating: number;
  isBasket: boolean;
  buttonText: ButtonTextEnum;
}
