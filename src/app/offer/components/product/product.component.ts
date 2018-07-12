import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// Models
import { Product } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {

  @Input() product: Product;

  @Output() add = new EventEmitter<Product>();
}
