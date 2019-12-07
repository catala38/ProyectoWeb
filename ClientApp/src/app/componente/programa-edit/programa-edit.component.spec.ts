import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaEditComponent } from './programa-edit.component';

describe('ProgramaEditComponent', () => {
  let component: ProgramaEditComponent;
  let fixture: ComponentFixture<ProgramaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
