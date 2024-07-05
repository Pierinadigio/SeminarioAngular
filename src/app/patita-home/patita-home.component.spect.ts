import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatitaHomeComponent } from './patita-home.component';

describe('PatitaHomeComponent', () => {
  let component: PatitaHomeComponent;
  let fixture: ComponentFixture<PatitaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatitaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatitaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});