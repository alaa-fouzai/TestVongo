import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../auth/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  status: boolean;
  constructor(private authservice: AuthServiceService, private router: Router) { }
  ngOnInit() {
    if (this.authservice.loggedIn()) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  disconnect() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('LoggedIn');
    this.router.navigate(['/login']);
  }

}
