import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidCutComponent } from './mid-cut.component';

describe('MidCutComponent', () => {
  let component: MidCutComponent;
  let fixture: ComponentFixture<MidCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidCutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
