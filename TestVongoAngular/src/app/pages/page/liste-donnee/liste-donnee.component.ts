import {Component, EventEmitter, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import { Output } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../page.service';
@Component({
  selector: 'app-liste-donnee',
  templateUrl: './liste-donnee.component.html',
  styleUrls: ['./liste-donnee.component.scss']
})
export class ListeDonneeComponent implements OnInit {
  @Output() testVariable = new EventEmitter();
  URL = 'http://localhost/TestVongo/ListItems.php';
  DeleteURL = 'http://localhost/TestVongo/DeleteItem.php';
  data;
  constructor(private http: HttpClient, private router: Router, private page: PageService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    const CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.http.get(this.URL, {
      params: {
        Userid : CurrentUser.id,
      }
    } ).subscribe(data => {
      const resSTR = JSON.stringify(data);
      const resJSON = JSON.parse(resSTR);
      console.log(data);
      if (resJSON.status === 'ok') {
        this.data = resJSON.data;
        Swal.fire(
          'Success!',
          resJSON.message,
          'success'
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resJSON.message,
        });
      }
    });
  }

  deleatItem(id: string) {
    console.log(id);
    this.http.get(this.DeleteURL, {
      params: {
        Id : id
      }
    } ).subscribe(data => {
      const resSTR = JSON.stringify(data);
      const resJSON = JSON.parse(resSTR);
      console.log(data);
      if (resJSON.status === 'ok') {
        this.getData();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resJSON.message,
        });
      }
    });
  }

  modify(item: any) {
    localStorage.setItem('mod', JSON.stringify(item ));
    this.router.navigate(['/pages/modifier']);
  }
}
