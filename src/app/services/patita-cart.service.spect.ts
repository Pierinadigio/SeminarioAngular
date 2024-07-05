import { TestBed } from '@angular/core/testing';
import { ProductoCartService } from './patita-cart.service';

describe('ProductoCartService', () => {
  let service: ProductoCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});