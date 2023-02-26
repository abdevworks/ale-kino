import { TicketsService } from './../../../../services/tickets.service';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserOrderDetailsService {
  private ticketsService = inject(TicketsService);
  constructor() {}

  getOrderTickets(route: ActivatedRoute) {
    return route.paramMap.pipe(
      switchMap((params) => {
        const id: string = <string>params.get('id');
        return this.ticketsService.getAllOrderTicketsWithFullInfo(
          Number.parseInt(id, 10)
        );
      })
    );
  }
}
