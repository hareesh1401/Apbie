import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, false);
  }
  handleLogout(){
    console.log('logout');
    
    localStorage.removeItem('isLogin')
    this.router.navigateByUrl('/')

  }

  selectTitle(name:any){

  }

}
