import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// Models
import { Product, ProductGroup } from '../../models';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSelectorComponent {

  @Input() addedProductIds: { [key: string]: number };
  @Input() productGroups: ProductGroup[];

  @Output() addProduct = new EventEmitter<string>();
  @Output() removeProduct = new EventEmitter<string>();

  onAddProduct(productId: string) {
    this.addProduct.emit(productId);
  }

  onRemoveProduct(productId: string) {
    this.removeProduct.emit(productId);
  }

  getBadgeCount(productGroupId: string) {
    const group = this.productGroups.find(x => x.id === productGroupId);

    if (group) {
      return group.products
        .map(product => product.id)
        .map(id => this.addedProductIds[id] || 0)
        .reduce((acc: number, curr: number) => acc + curr);
    }

    return 0;
  }
}
