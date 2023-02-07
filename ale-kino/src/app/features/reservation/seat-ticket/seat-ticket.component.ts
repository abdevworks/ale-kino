import { Component, inject, OnInit } from '@angular/core';
import { Ticket, TicketsService, TicketType } from 'src/app/services/tickets.service';
import { ScreeningService, Seat } from '../../../services/screening.state.service';

@Component({
  selector: 'app-seat-ticket',
  templateUrl: './seat-ticket.component.html',
  styleUrls: ['./seat-ticket.component.scss']
})
export class SeatTicketComponent implements OnInit {
  ticketsService = inject(TicketsService);
  constructor(private screeningService: ScreeningService) { }

  ngOnInit(): void {
    this.screeningService.screeningTicketsState$.subscribe(screeningTicketsState => {
      this.selectedTickets = screeningTicketsState.selectedTickets;
    })
    this.ticketsService.getTicketTypes().subscribe(ticketTypes => {
      this.ticketTypes = ticketTypes;
    })
  }

  selectedTickets: Ticket[] = [];
  icon: any = 'trash-can';
  ticketTypes: TicketType[] = [];
  selectedTicket!: TicketType;

  onSelected(ticket: Ticket, ticketTypeId: string){
    console.log("Ticket Info:", ticket)
    console.log('New ticket type id:',ticketTypeId)
    this.ticketsService.getTicketTypeInfo(parseInt(ticketTypeId, 10))
    // this.selectedTicket = <TicketType>this.ticketTypes.find(ticket => ticket.id === ticket.id);
  }

  getTicketPrice(ticketTypeId: number){
    return this.ticketTypes.find(ticketType => ticketType.id === ticketTypeId)?.price;
  }

  removeTicket(row: string, seatNumber: number) {
    const selectedTicket = this.screeningService.isSeatSelected({row, seatNumber});
    if (selectedTicket !== undefined) {
      this.ticketsService
        .removeTicketFromOrder((<Ticket>selectedTicket)?.id)
        .subscribe(() => {
          this.screeningService.removeSelectedTicketFromLocalState(selectedTicket);
        });
    }
  }

}
