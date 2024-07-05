import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Producto } from '../Producto';

const URL = 'https://62b75604691dcea2733d7a78.mockapi.io/api/v1/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Producto[]>{
    /*Esto devuelve un observable, no devuelve una respuesta como el fetch*/
   return this.http.get<Producto[]>(URL)
      .pipe(
        tap ( (productos: Producto[]) => productos.forEach(producto => { producto.quantity  = 0 })
        )
      );
  }

}