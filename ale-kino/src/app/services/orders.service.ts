import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


export type Order = {
  id: number;
  userId: number;
  screeningId: number;
  isCheckedOut: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private http = inject(HttpClient);

  getAllScreeningOrders(screeningId: number) {
    return this.http.get(
      `/orders?screeningsId=${screeningId}`
    );
  }

  getAllCheckedOutScreeningOrders(screeningId: number) {
    return this.http.get<Order[]>(
      `/orders?screeningsId=${screeningId}&isCheckedOut=true`
    );
  }

  getNotCheckedOutUserScreeningOrder(screeningId: number, userId: number) {
    return this.http.get<Order[]>(
      `/orders?screeningsId=${screeningId}&userId=${userId}&isCheckedOut=false`
    );
  }

  constructor() {}
}