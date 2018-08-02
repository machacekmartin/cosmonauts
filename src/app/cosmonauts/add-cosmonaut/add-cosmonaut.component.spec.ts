import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCosmonautComponent } from './add-cosmonaut.component';

describe('AddCosmonautComponent', () => {
  let component: AddCosmonautComponent;
  let fixture: ComponentFixture<AddCosmonautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCosmonautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCosmonautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
