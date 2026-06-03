  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Component, inject } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { Router } from '@angular/router';
  import { API_URL } from '../../api.constants';
  import { __param } from 'tslib';

  @Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css',
  })
  export class Login {
    router = inject(Router)
    http = inject(HttpClient)
    loginobj :any = {
      username: '',
      Password: ''
    }

   

    gotoforgotpassword() {
      this.router.navigateByUrl("forgotpassword");
    }
    login() {      
    this.http.post("http://localhost:7261/Api/Customer/Login", this.loginobj).subscribe({
      next: (response: any) => {
         localStorage.setItem("token", response.token);

        // Optional: Store customer details
        localStorage.setItem("customer", JSON.stringify(response.cust));
        
        this.router.navigateByUrl("dashboard"); 
      },
      error: (error) => {        
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');        
      }
      });   
    }
  }
