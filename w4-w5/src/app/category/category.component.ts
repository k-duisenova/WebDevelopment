import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../products.service';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products:any;
  category:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private categoryService: CategoriesService
  ) {
    this.router.events.subscribe((value =>{ this.getProducts(); this.getCategory(); }))
  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }

  getProducts(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }
  getCategory(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
}
