import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit , OnDestroy {

  constructor(private formBuilder: FormBuilder, private router: Router , private http: HttpClient) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  private loggedIn: boolean;
  UserapiUrl = 'http://localhost/TestVongo/register.php';
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  get f() { return this.registerForm.controls; }
  ngOnDestroy(): void {
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('hello');
      console.log(this.registerForm.get('firstName').value);
      this.http.get(this.UserapiUrl, {
        params: {
          FirstName: this.registerForm.get('firstName').value ,
          LastName: this.registerForm.get('lastName').value,
          Password: this.registerForm.get('password').value,
          email: this.registerForm.get('email').value
        }
      }).subscribe(data => {
        console.log(data);
        const resSTR = JSON.stringify(data);
        const resJSON = JSON.parse(resSTR);
        console.log(resJSON.status);
        if (resJSON.status === 'ok') {
          Swal.fire(
            'Account Created!',
            resJSON.message,
            'success'
          );
          this.router.navigate(['/login']);
        } else {
          console.log(resJSON.message);
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
          text: 'Something went wrong!',
          footer: JSON.stringify(error.json())
        });
        console.log(JSON.stringify(error.json()));
      });
    }
  }

}
