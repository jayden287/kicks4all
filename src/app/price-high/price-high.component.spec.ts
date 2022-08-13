import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceHighComponent } from './price-high.component';

describe('PriceHighComponent', () => {
  let component: PriceHighComponent;
  let fixture: ComponentFixture<PriceHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
