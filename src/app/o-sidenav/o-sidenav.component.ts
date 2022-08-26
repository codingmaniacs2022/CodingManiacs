import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-o-sidenav',
  templateUrl: './o-sidenav.component.html',
  styleUrls: ['./o-sidenav.component.scss']
})
export class OSidenavComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onldiet(){
    this.router.navigate(['o-diet'], {relativeTo:this.route});
  }
  onlwo() {
    this.router.navigate(['o-wo'], {relativeTo:this.route});
  }
  onlp(){
    this.router.navigate(['o-profile'], {relativeTo:this.route});
  }
  onlh(){
    this.router.navigate(['o-history'], {relativeTo:this.route});
  }

}
