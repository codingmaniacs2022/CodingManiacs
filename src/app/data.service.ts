import { Injectable } from '@angular/core';
import { Det } from './det';
import {AngularFirestore} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }
  addProduct(product:Det){
    product.id = this.afs.createId();
    
    this.afs.collection('/Details/').add(product);
    this.afs.collection('/pp/').add(product);
  }

  getAllcarts(){
    return this.afs.collection('/bmi').snapshotChanges();  
  }
  addcart(product:Det){
    this.afs.collection('/details/').add(product);
    this.afs.collection('/pp/').add(product);
  }
  getAllProducts(){
    return this.afs.collection('pp').snapshotChanges();
  }
  getAllProduct(){
    return this.afs.collection('Details').snapshotChanges();
  }
  deleteProductCart(product:Det){
    return this.afs.collection('/pp/').doc(product.id).delete();
  }
}
