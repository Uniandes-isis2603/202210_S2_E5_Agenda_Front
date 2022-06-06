import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/evento/evento';
import { Invitado } from '../invitado';
import { InvitadoDetail } from '../invitado-detail';
import { InvitadoService } from '../invitado.service';

@Component({
  selector: 'app-invitado-list',
  templateUrl: './invitado-list.component.html',
  styleUrls: ['./invitado-list.component.css']
})
export class InvitadoListComponent implements OnInit {
  invitados: Array<Invitado> = [];
  eventos: Array<Evento> = [];
  selectedInvitado!: Invitado;
  selected: Boolean = false;

  constructor(private invitadoService: InvitadoService) { }
  getInvitados(): void {
    this.invitadoService.getInvitados().subscribe(invitados => {
      this.invitados = invitados;
    });
  }
  onSelected(invitado: InvitadoDetail):void{
    this.selected = true;
    this.selectedInvitado = invitado;
  }
  ngOnInit() {
    this.getInvitados();
  }

}
