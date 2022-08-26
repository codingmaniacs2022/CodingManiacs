import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-ow-sidenav',
  templateUrl: './ow-sidenav.component.html',
  styleUrls: ['./ow-sidenav.component.scss']
})
export class OwSidenavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onldiet(){
    this.router.navigate(['ow-diet'], {relativeTo:this.route});
  }
  onlwo() {
    this.router.navigate(['ow-wo'], {relativeTo:this.route});
  }
  onlp(){
    this.router.navigate(['ow-profile'], {relativeTo:this.route});
  }
  onlh(){
    this.router.navigate(['ow-history'], {relativeTo:this.route});
  }

}
