import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-normal-sidenav',
  templateUrl: './normal-sidenav.component.html',
  styleUrls: ['./normal-sidenav.component.scss']
})
export class NormalSidenavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onldiet(){
    this.router.navigate(['normal-diet'], {relativeTo:this.route});
  }
  onlwo() {
    this.router.navigate(['normal-wo'], {relativeTo:this.route});
  }
  onlp(){
    this.router.navigate(['normal-profile'], {relativeTo:this.route});
  }
  onlh(){
    this.router.navigate(['normal-history'], {relativeTo:this.route});
  }

}
