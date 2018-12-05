import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrordisplayComponent } from './field-errordisplay.component';

describe('FieldErrordisplayComponent', () => {
  let component: FieldErrordisplayComponent;
  let fixture: ComponentFixture<FieldErrordisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldErrordisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
