import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLowComponent } from './price-low.component';

describe('PriceLowComponent', () => {
  let component: PriceLowComponent;
  let fixture: ComponentFixture<PriceLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
