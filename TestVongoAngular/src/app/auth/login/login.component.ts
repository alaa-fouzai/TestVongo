import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  submitted = false;
  loading = false;
  private loggedIn: boolean;
  public CurrentUser;
  UserapiUrl = 'http://localhost/TestVongo/login.php';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  get f() { return this.LoginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.LoginForm.valid) {
      this.http.get(this.UserapiUrl, {
        params: {
          Password: this.LoginForm.get('pwd').value,
          email: this.LoginForm.get('email').value
        }
      } ).subscribe(data => {
        console.log(data);
        const resSTR = JSON.stringify(data);
        const resJSON = JSON.parse(resSTR);
        console.log(resJSON.id);
        console.log(resJSON.LastName);
        console.log(resJSON.email);
        if (resJSON.status === 'ok') {
          Swal.fire(
            'Welcome!',
            resJSON.message,
            'success'
          );
          // tslint:disable-next-line:max-line-length
          localStorage.setItem('currentUser', JSON.stringify({id : resJSON.id, LastName : resJSON.LastName , email : resJSON.email , FirstName : resJSON.FirstName }));
          localStorage.setItem('LoggedIn', 'true' );
          this.router.navigate(['/']);
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
