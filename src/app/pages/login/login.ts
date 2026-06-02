import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router= inject(Router)
  
  gotoforgotpassword() {
    this.router.navigateByUrl("forgotpassword");
  } 


}
