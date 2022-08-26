import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obesepage',
  templateUrl: './obesepage.component.html',
  styleUrls: ['./obesepage.component.css']
})
export class ObesepageComponent implements OnInit {

  constructor() { }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
  }

}
