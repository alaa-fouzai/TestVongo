import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
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
