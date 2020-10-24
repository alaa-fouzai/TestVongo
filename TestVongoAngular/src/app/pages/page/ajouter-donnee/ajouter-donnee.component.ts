import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-donnee',
  templateUrl: './ajouter-donnee.component.html',
  styleUrls: ['./ajouter-donnee.component.scss']
})
export class AjouterDonneeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  URL = 'http://localhost/TestVongo/AjouterItem.php';
  AjouterForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.AjouterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      decription: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    const CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.AjouterForm.valid) {
      this.http.get(this.URL, {
        params: {
          Userid : CurrentUser.id,
          name: this.AjouterForm.get('name').value,
          stock: this.AjouterForm.get('stock').value,
          decription: this.AjouterForm.get('decription').value,
          price: this.AjouterForm.get('price').value,
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
