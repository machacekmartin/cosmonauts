import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmonautsComponent } from './cosmonauts.component';

describe('CosmonautsComponent', () => {
  let component: CosmonautsComponent;
  let fixture: ComponentFixture<CosmonautsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmonautsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmonautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
