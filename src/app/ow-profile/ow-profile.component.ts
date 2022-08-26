import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Det } from '../det';

@Component({
  selector: 'app-ow-profile',
  templateUrl: './ow-profile.component.html',
  styleUrls: ['./ow-profile.component.scss']
})
export class OwProfileComponent implements OnInit {
  productList: Det[] =[];
  cartList : Det[]=[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.data.getAllProducts().subscribe(res =>{
      this.productList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        //alert('started');
        return data;
        
      })
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }
  checkout(){
    this.productList.forEach(element => {
      this.data.deleteProductCart(element);
      
    });
  }


}
