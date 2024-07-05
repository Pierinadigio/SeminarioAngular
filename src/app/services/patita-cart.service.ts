import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../Producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoCartService {

  private _cartList: Producto[] = [];
   cartList: BehaviorSubject<Producto[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(producto: Producto) {
    producto.quantity;
    let itemCart: Producto | undefined = this._cartList.find((item: Producto) => item.description === producto.description);
    
      if (itemCart){
        itemCart.quantity  += producto.quantity ;
      }
      else {
        this._cartList.push({...producto});
  }  
  console.log(this._cartList); 
  this.cartList.next(this._cartList);














  }
}