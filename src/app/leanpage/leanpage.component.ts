import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leanpage',
  templateUrl: './leanpage.component.html',
  styleUrls: ['./leanpage.component.css']
})
export class LeanpageComponent implements OnInit {

  constructor(private route:Router) { }

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
  }

}
