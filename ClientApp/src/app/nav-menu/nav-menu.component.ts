import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;

  ngOnInit(){
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
   });
  

  }

  constructor(private authorizeService: AuthService,
    private _router: Router) { }

    userName(): string {
      return this.authorizeService.getUserName();
  }

  rolUser(): string {
    return this.authorizeService.getRolUser();
  }

  nameUser(): string {
    return this.authorizeService.getName();
  }

  public isAuthenticated(): boolean
  {
      return this.authorizeService.isAuthenticated();
  }

  isAuthenticatedRole(role: string): boolean {
      if (this.isAuthenticated && role != null ) {
          return this.authorizeService.hasRole(role);
      }
  }

  logout() {
    this.authorizeService.logout();
    this._router.navigate(['/logear']);
  }

  
}
