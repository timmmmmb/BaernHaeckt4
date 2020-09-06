import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
