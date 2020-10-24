import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Input} from '@angular/core';
import {PageService} from '../page.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modifier-donnee',
  templateUrl: './modifier-donnee.component.html',
  styleUrls: ['./modifier-donnee.component.scss']
})
export class ModifierDonneeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }
  URL = 'http://localhost/TestVongo/ModifierItem.php';
  ModifierForm: FormGroup;
  submitted = false;
  item;
  ngOnInit() {
    this.item = JSON.parse(localStorage.getItem('mod'));
    this.ModifierForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      decription: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    const CurrentUser = JSON.parse(localStorage.getItem('mod'));
    if (this.ModifierForm.valid) {
      this.http.get(this.URL, {
        params: {
          id : CurrentUser.id,
          name: this.ModifierForm.get('name').value,
          stock: this.ModifierForm.get('stock').value,
          decription: this.ModifierForm.get('decription').value,
          price: this.ModifierForm.get('price').value,
        }
      } ).subscribe(data => {
        const resSTR = JSON.stringify(data);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.status === 'ok') {
          Swal.fire(
            'Success!',
            resJSON.message,
            'success'
          );
          // tslint:disable-next-line:max-line-length
          this.router.navigate(['/pages/liste']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resJSON.message,
          });
        }
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.toString(),
        });
        console.log(JSON.stringify(error.json()));
      });
    }
  }

}
