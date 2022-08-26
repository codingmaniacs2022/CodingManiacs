import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Det } from '../det';

@Component({
  selector: 'app-ow-header',
  templateUrl: './ow-header.component.html',
  styleUrls: ['./ow-header.component.scss']
})
export class OwHeaderComponent implements OnInit {
  productList:Det[]=[];
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private data:DataService) { }
  onLogout() {
    this.router.navigate(['firstpage']);
    // localStorage.removeItem('userId');
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
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
    this.productList.forEach(element =>{
      this.data.deleteProductCart(element);
    })
  }

}
