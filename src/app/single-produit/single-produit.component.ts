import { SearchProductService } from './../service/search-product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.css']
})
export class SingleProduitComponent implements OnInit {
  product:any;
  public products:Product[]=[];
  constructor(private route: ActivatedRoute, private router:Router, private productService : SearchProductService, private dataService: SearchProductService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    
    this.product=this.productService.getProduct(id).subscribe(data => {
      this.product = data;
      //console.log(data);
  });
  }
  goBack(): void {
    this.router.navigate(['']);
  
}
remove(){
  this.productService.deleteProduct(this.product).subscribe(_=> this.goBack())
}
}
