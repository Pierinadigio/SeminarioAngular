import { Component, OnInit ,Input} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoCartService } from '../services/patita-cart.service';
import { Producto } from '../Producto';

@Component({
  selector: 'app-patita-cart',
  templateUrl: './patita-cart.component.html',
  styleUrls: ['./patita-cart.component.scss']
})

export class ProductoCartComponent implements OnInit {
  @Input()
  quantity : number = 0;
  cartList$: Observable<Producto[]>;

    constructor(private cartService: ProductoCartService) { 
        this.cartList$ = cartService.cartList.asObservable();
    }

    getTotal(): number {
      let total = 0;
      this.cartList$.forEach(productos => {
          productos.forEach(producto => {
              total += producto.price * producto.quantity;
          });
      });
      return total;
    }
    
    ngOnInit(): void {
    }

}