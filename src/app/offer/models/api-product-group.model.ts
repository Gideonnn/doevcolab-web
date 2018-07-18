import { ApiProduct } from './api-product.model';

export interface ApiProductGroup {
  _id: string;
  name: string;
  Products: ApiProduct[];
}
