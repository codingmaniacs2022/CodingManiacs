import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Det } from '../det';

@Component({
  selector: 'app-lean-profile',
  templateUrl: './lean-profile.component.html',
  styleUrls: ['./lean-profile.component.scss']
})
export class LeanProfileComponent implements OnInit {
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
