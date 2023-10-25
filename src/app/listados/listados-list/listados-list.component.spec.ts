import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosListComponent } from './listados-list.component';

describe('ListadosListComponent', () => {
  let component: ListadosListComponent;
  let fixture: ComponentFixture<ListadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
