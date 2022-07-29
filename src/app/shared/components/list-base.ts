import { EventEmitter } from '@angular/core';

export interface ListBase<T> {
  readonly trackByFn: (index: number, item: T) => any;
  readonly columns: Array<keyof T>;
  readonly removeFromFavorite: EventEmitter<T>;
  readonly addToFavorite: EventEmitter<T>;
  dataSource: T[];
  error: boolean;
}
