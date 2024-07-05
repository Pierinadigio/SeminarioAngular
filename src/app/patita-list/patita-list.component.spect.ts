import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoListComponent } from './patita-list.component';

describe('PatitaListComponent', () => {
  let component: ProductoListComponent;
  let fixture: ComponentFixture<ProductoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});