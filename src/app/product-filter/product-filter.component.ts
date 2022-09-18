import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Output() filter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterList(brand: string){
    this.filter.emit(brand);
  }

}
