import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautFormComponent } from './astronaut-form.component';

describe('AstronautFormComponent', () => {
  let component: AstronautFormComponent;
  let fixture: ComponentFixture<AstronautFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronautFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
