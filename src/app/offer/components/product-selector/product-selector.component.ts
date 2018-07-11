import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
