import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  @Input()
  quantity : number = 0;

  @Input()
  max: number = 0;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity  < this.max){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Esta intentando agregar más productos que los que hay en stock")
    }
  }
  
  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }    
    
  }

  onChangeQuantity(event: any): void {
    console.log(event);
    this.quantityChange.emit(this.quantity);
  
    
  }

}