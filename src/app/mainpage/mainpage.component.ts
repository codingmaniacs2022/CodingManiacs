import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Det } from '../det';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  productList:Det[]=[];
  cartList:Det []=[];
  total:number=0;
  productObj:Det ={
    id:'',
    name:'',
    age:0,
    gender:'',
    phone:0,
    height:0,
    weight:0,
    spl:'',
    total:0,
  }
  name: string='';
  phone: number=0;
  age: number=0;
  gender: string='';
  height: number=0;
  weight: number=0;
  spl: string=''; 

  constructor(public  data : DataService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){ 
    if(this.name == '' || this.phone == 0 || this.age == 0  ||this.height == 0 || this.weight== 0 ||this.gender== '' ||this.spl== ''){ 
      alert('Fill all the input fields'); 
    } 
 
    this.productObj.name = this.name; 
    this.productObj.phone= this.phone; 
    this.productObj.age = this.age; 
    this.productObj.height= this.height; 
    this.productObj.weight= this.weight; 
    this.productObj.gender= this.gender; 
    this.productObj.spl= this.spl; 
    this.productObj.total=this.productObj.weight/(this.productObj.height*this.productObj.height)*10000;
    if(this.productObj.total<=20){
      this.router.navigate(['leanpage/lean-image']);
    }
    else if(this.productObj.total<=25){
      this.router.navigate(['normal/normal-image']);
    }
    else if(this.productObj.total<=30){
      this.router.navigate(['overweightpage/ow-image']);
    }
    else if(this.productObj.total>30){
      this.router.navigate(['obesepage/o-image']);
    }
 
    this.data.addProduct(this.productObj); 
    this.resetForm(); 
  } 
  resetForm(){
   
    this.name = '';
    this.phone = 0;
    this.height = 0;
    this.weight = 0;
    this.age = 0;
    this.gender = '';
    this.spl='';
  }

  getAllcarts(){
    this.data.getAllcarts().subscribe(res=>{
      this.cartList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.calculatetotal(this.cartList);
      alert('submited!');
    },err=>{
      alert('Error while Fetching data');
    })
  }
  
  calculatetotal(cartList: any[]){
    this.total=0;
    cartList.forEach(element => {
      this.total=element.weight/(element.height*element.height);
    })
  }

  addcart(product:Det){
    product.total=product.weight/(product.height*product.height);
    this.data.addcart(product);
    alert('Item added to cart');
  }

}
