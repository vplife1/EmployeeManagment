<<<<<<< HEAD
  import { HttpClient, HttpParams } from '@angular/common/http';
=======
  import { HttpClient } from '@angular/common/http';
>>>>>>> c3e3efb7eac1a9bd416c55197f2aeb30a9f3fa31
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

<<<<<<< HEAD
   

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
=======
    gotoforgotpassword() {
      this.router.navigateByUrl("forgotpassword");
    }
    login() {
      debugger
    this.http.post("https://192.168.0.101:7226/Api/Customer/Login", this.loginobj).subscribe({
      next: (response: any) => {
  debugger
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl("dashboard"); 
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
        debugger
>>>>>>> c3e3efb7eac1a9bd416c55197f2aeb30a9f3fa31
      }
      });   
    }
  }
