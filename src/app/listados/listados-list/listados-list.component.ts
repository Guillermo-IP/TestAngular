import { Component } from '@angular/core';

@Component({
  selector: 'app-listados-list',
  templateUrl: './listados-list.component.html',
  styleUrls: ['./listados-list.component.scss']
})
export class ListadosListComponent {
  Titulo = 'AQUI ESTAN LOS LISTADOS';
  getTitle(): string {
    return this.Titulo;
}
}
