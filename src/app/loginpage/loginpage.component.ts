import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  emaill: string='';
  passwordl: string='';
  // username: string;

  constructor(private route:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  onclicka(){

    this.route.navigate(['firstpage']);
  }

  lin(){ 
       
    if(this.emaill == ''){ 
      alert('please enter email'); 
      return; 
 
     } 
   
     if(this.passwordl == '') { 
      alert('please enter password'); 
      return; 
     } 
     if(this.emaill!='',this.passwordl!='')
     {
      
     }
      
   
     this.auth.lin(this.emaill,this.passwordl); 
     this.emaill=''; 
     this.passwordl = ''; 
      
   
}


}
