import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadosListComponent } from './listados-list/listados-list.component';



@NgModule({
  declarations: [
    ListadosListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListadosListComponent]
})
export class ListadosModule { }
