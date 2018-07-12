import { Product } from './product.model';

export interface ProductGroup {
  name: string;
  products: Product[];
}
