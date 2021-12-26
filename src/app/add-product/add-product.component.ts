
import { Component, OnInit, Input } from '@angular/core';
import { SearchProductService } from './../service/search-product.service';
import { Product } from './../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() product: any;
  constructor(private route: ActivatedRoute, private router: Router, private productService: SearchProductService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
  }
  goBack(): void {
    this.router.navigate(['']);
  }


  onSubmit(f: NgForm) {

    this.productService.addProduct(this.product).subscribe(data => {
      this.product = data
    });
    //let link = ['/single', this.product.id];
    console.log(this.product);
    alert("Felicitacion vous venez d\'ajouter" + ' ' + this.product.name)
  }

}
