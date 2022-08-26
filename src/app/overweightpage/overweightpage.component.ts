import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overweightpage',
  templateUrl: './overweightpage.component.html',
  styleUrls: ['./overweightpage.component.css']
})
export class OverweightpageComponent implements OnInit {

  constructor() { }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
  }

}
