import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  arr: any;
  pass: string;
  utente: string;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
  
    this.http.post("http://192.168.1.112:8097/admin", password, { responseType: 'text' }).subscribe({
      next: response => {
        if (username === "admin" && response === "ok") {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', username);
          this.router.navigate(['/server']);
        } else {
          alert('Nome utente o password non validi');
          console.log(username);
          console.log(password);
        }
      },
      error: error => {
        console.error('ERRORE!', error);
      }
    });
  }

  

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

    this.router.navigate(['/']);
  }

  
}
