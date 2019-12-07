import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaAddComponent } from './programa-add.component';

describe('ProgramaAddComponent', () => {
  let component: ProgramaAddComponent;
  let fixture: ComponentFixture<ProgramaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
