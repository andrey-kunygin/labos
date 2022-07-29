import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { OrdersComponent } from "./orders/orders.component";
import { OrdersRoutingModule } from "./orders-routing.module";
import { ordersReducer } from './orders/orders.reducer';
import { OrdersEffects } from './orders/orders.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
  ],
})
export class OrdersModule {}
