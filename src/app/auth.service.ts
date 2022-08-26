import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth'
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth,private router : Router) { }
  lin(emaill: string, passwordl : string, ): void { 
    this.fireauth.signInWithEmailAndPassword(emaill,passwordl).then( ()=> { 
      alert('login successfully'); 
      localStorage.setItem('token','true'); 
      console.log("working");
      this.router.navigate(['mainpage']); 
        
       
    }, err => { 
      alert(err.message); 
      this.router.navigate(['/lin']); 
    } 
    ) 
  } 
   
   
  sin(email : string, password: string, username: string) { 
    this.fireauth.createUserWithEmailAndPassword(email,password).then(() =>{ 
     alert('registation successfully'); 
     this.router.navigate(['/firstpage']); 
    }, err => { 
      alert(err.message); 
      this.router.navigate(['/sin']) 
    }) 
  } 
   
  
}
