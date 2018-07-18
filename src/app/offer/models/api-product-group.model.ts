import { Product } from './product.model';

export interface ApiProductGroup {
  _id: string;
  name: string;
  Products: Product[];
}
