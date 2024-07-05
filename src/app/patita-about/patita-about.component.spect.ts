import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatitaAboutComponent } from './patita-about.component';

describe('PatitaAboutComponent', () => {
  let component: PatitaAboutComponent;
  let fixture: ComponentFixture<PatitaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatitaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatitaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});