import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadListComponent } from './facultad-list.component';

describe('FacultadListComponent', () => {
  let component: FacultadListComponent;
  let fixture: ComponentFixture<FacultadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
