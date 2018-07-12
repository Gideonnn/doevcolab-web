import { Product } from './product.model';

export interface ApiProductGroup {
  name: string;
  Products: Product[];
}
