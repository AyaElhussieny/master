import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allProduct !: Product[];
  isError : boolean = false;
  isLoading : boolean = false;

  constructor(private _ProductService:ProductService){
    this.getProducts();
  }

  getProducts(){
    this.isLoading = true;
    this._ProductService.getProducts().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allProduct = res;
        this.isLoading = false;
      },
      error:(err:any)=>{
        console.log(err);
        this.isError = true;
        this.isLoading = false;

      }
    })
  }
}
