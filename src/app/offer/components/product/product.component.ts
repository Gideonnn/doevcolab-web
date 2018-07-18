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

  @Input() addedProductIds: { [key: string]: number };
  @Input() product: Product;

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  getBadgeCount(productId: string) {
    return this.addedProductIds[productId] || 0;
  }

  onAdd(productId: string, event: any) {
    event.stopPropagation();
    this.add.emit(productId);
  }

  onRemove(productId: string, event: any) {
    event.stopPropagation();
    this.remove.emit(productId);
  }
}
