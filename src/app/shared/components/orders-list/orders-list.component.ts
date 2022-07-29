import { OrderView } from './../../models';
import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { utils } from '../../../core';
import { ListBase } from '../list-base';

@Component({
  selector: 'st-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersListComponent implements ListBase<OrderView> {
  readonly trackByFn = (index: number, item: OrderView) =>
    `${item.identifier}.${item.isFavorite}` || index;
  readonly columns = [
    utils.nameOf<OrderView>('orderName'),
    utils.nameOf<OrderView>('orderNum'),
    utils.nameOf<OrderView>('status'),
    utils.nameOf<OrderView>('isFavorite'),
  ];
  @Output() addToFavorite = new EventEmitter<OrderView>();
  @Output() removeFromFavorite = new EventEmitter<OrderView>();

  @Input() dataSource: OrderView[];
  @Input() error: boolean;
}
