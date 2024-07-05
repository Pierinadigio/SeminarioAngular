import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoCartComponent } from './patita-cart.component';

describe('PatitaCartComponent', () => {
  let component: ProductoCartComponent;
  let fixture: ComponentFixture<ProductoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});