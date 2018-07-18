import { Product } from './product.model';

export interface ProductGroup {
  id: string;
  name: string;
  products: Product[];
}
