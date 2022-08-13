import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowCutComponent } from './low-cut.component';

describe('LowCutComponent', () => {
  let component: LowCutComponent;
  let fixture: ComponentFixture<LowCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowCutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
