import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDriverComponent } from './all-driver.component';

describe('AllDriverComponent', () => {
  let component: AllDriverComponent;
  let fixture: ComponentFixture<AllDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
