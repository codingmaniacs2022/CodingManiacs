import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Det } from '../det';

@Component({
  selector: 'app-lean-header',
  templateUrl: './lean-header.component.html',
  styleUrls: ['./lean-header.component.scss']
})
export class LeanHeaderComponent implements OnInit {
  productList:Det []=[];
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,public data:DataService) { }
  
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
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  
  checkout(){
    this.productList.forEach(element =>{
      this.data.deleteProductCart(element);
    })
  }
  onLogout() {
    this.router.navigate(['firstpage']);
    // localStorage.removeItem('userId');
  }

}
