import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-lean-sidenav',
  templateUrl: './lean-sidenav.component.html',
  styleUrls: ['./lean-sidenav.component.scss']
})
export class LeanSidenavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onldiet(){
    this.router.navigate(['lean-diet'], {relativeTo:this.route});
  }
  onlwo() {
    this.router.navigate(['lean-wo'], {relativeTo:this.route});
  }
  onlp(){
    this.router.navigate(['lean-profile'], {relativeTo:this.route});
  }
  onlh(){
    this.router.navigate(['lean-history'], {relativeTo:this.route});
  }

}
