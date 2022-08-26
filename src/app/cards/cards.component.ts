import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onlogin(){
    this.route.navigate(['loginpage']);

  }
  onclick(){
    this.route.navigate(['signuppage']);
  }

}
