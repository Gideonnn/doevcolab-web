import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

// Models
import { ProductGroup } from '../../models';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSelectorComponent implements OnInit {

  @Input() productGroups: ProductGroup[];

  constructor() { }

  ngOnInit() {}

}
