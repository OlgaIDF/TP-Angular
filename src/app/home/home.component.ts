import { SearchProductService } from './../service/search-product.service';
import { Component, OnInit } from '@angular/core';

import { Product } from './../models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;




  constructor(private dataService: SearchProductService) { }




  ngOnInit(): void {

    this.dataService.getProducts().subscribe(data => {

      this.products = data;
      console.log(data)


    })

  }
}
