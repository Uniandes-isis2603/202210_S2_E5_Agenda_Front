import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventoDetail } from '../evento-detail';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  eventos: Array<EventoDetail> = [];
  selected: Boolean = false;
  selectedEvento!: EventoDetail;

  constructor(private eventoService: EventoService) { }

  getEventos(): void {
    this.eventoService.getEventos().subscribe({next: eventos => this.eventos = eventos , error: e => console.error(e)});
  }

  onSelected(evento: EventoDetail):void{
    this.selected = true;
    this.selectedEvento = evento;
  }

  ngOnInit() {
    this.getEventos();
  }

}
