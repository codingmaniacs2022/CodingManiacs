import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
  email: string='';
  password: string='';
  username: string='';


  constructor(private route:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  onclicka()
  {
     this.route.navigate(['firstpage'])
  }
  sin(){ 
       
    if(this.email == ''){ 
      alert('please enter email'); 
      return; 
 
     } 
   
     if(this.password == '') { 
      alert('please enter password'); 
      return; 
     } 
     if(this.username ==''){ 
      alert('please enter username'); 
      return; 
 
     } 
     if(this.username!='',this.password!='')
     {
      
      this.route.navigate(['/loginpage']);
     }
   
     this.auth.sin(this.email,this.password,this.username); 
     this.email=''; 
     this.password = ''; 
     this.username= ''; 
  }


}
