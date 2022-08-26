import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Det } from '../det';

@Component({
  selector: 'app-ow-history',
  templateUrl: './ow-history.component.html',
  styleUrls: ['./ow-history.component.css']
})
export class OwHistoryComponent implements OnInit {

  productList: Det[] =[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.data.getAllProduct().subscribe(res =>{
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

}
