import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  public order$!: Observable<Order>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersSerivce: OrdersService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this.order$ = this.ordersSerivce.getItemById(id);
    });
  }

  public action(order: Order): void {
    this.ordersSerivce.update(order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
