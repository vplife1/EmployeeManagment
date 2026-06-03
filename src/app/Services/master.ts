import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class Master {

  http = inject(HttpClient);

  apiUrl = "http://localhost:7261/Api";

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/Customer`);
  }

  getCustomerById(id: number) {
    // Logic to fetch a specific customer by ID from the backend API
  }

  createCustomer(customerData: Customer) {
    // Logic to create a new customer in the backend API

    return this.http.post(`${this.apiUrl}/Customer/AddCustomer`, customerData);
  }

  updateCustomer(id: number, customerData: any) {
    // Logic to update an existing customer in the backend API
  }

  deleteCustomer(id: string) {
    debugger;
    // Logic to delete a customer from the backend API
    return this.http.delete(`${this.apiUrl}/Customer/Delete Customer/${id}`);
  }
}
