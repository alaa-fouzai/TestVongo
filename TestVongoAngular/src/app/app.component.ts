import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TestVongo';
  status;
  ngOnInit() {
  }
}
