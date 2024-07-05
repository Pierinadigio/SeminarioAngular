import { Component, OnInit } from '@angular/core';
import { ProductoCartService } from '../services/patita-cart.service';
import { Producto } from '../Producto';
import { ProductoDataService } from '../services/patita-data.service';


@Component({
  selector: 'app-patita-list',
  templateUrl: './patita-list.component.html',
  styleUrls: ['./patita-list.component.scss']
})

/*Controller. */
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private cartService: ProductoCartService,
    private productoDataService: ProductoDataService
    ) {

   }

  ngOnInit(): void {
   this.productoDataService.getAll()
      .subscribe(productosFromService => (this.productos = productosFromService))
    
  }

  maxReached(mensajeFromInputCompenent: string) {
    //debugger;
    alert(mensajeFromInputCompenent);
  }

  addToCart(producto: Producto): void{ 
    if(producto.quantity > 0){
      if(producto.quantity <= producto.stock){
        this.cartService.addToCart(producto);
        producto.stock -= producto.quantity;
        producto.quantity = 0;
      }else{
        alert("Está intentando agregar más productos que los que hay en stock");
      }
    }else{
      alert("Seleccione la cantidad para agregar a su lista de compras");
    }
  }

}