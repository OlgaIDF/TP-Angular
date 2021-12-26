import { SearchProductService } from './../service/search-product.service';
import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product: any;
  public products:Product[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private productService: SearchProductService, private dataService: SearchProductService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    });
  }

  onSubmit(f: NgForm) {
    let id = this.route.snapshot.params['id'];

    this.product = this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    });
    
    console.log(this.product);
  }

}