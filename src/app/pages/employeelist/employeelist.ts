<<<<<<< HEAD
import { Component, inject, OnInit, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Master } from '../../Services/master';
import { Customer } from '../../Models/customer.model';
import { FormsModule } from '@angular/forms';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employeelist.html',
  styleUrls: ['./employeelist.css'],
})
export class Employeelist implements OnInit {
  private master = inject(Master);
  @ViewChild('addToggleCheckbox') addToggleCheckbox!: ElementRef;

  employees=signal<Customer[]>([]);
  loading = false;
  errorMessage = '';
  toast = signal<Toast | null>(null);

  newEmployee: Customer = {
      // Initialize with default or empty values
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      userName: '',
      role: '' ,
      searchText: 'test',
      embeddingJson: 'test',
      // Default role, adjust as needed
    };

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.loading = true;
    this.errorMessage = '';

    this.master.getAllCustomers().subscribe({
      next: (data) => {
        this.employees.set(Array.isArray(data) ? data : []);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load employees', err);
        this.errorMessage = 'Unable to load employees. Please try again.';
        this.loading = false;
      }
    });
  }

  addEmployee() {
    this.master.createCustomer(this.newEmployee).subscribe({
      next: (response: any) => {
        const message = response?.message || response?.statusDescription || 'Customer added successfully!';
        this.showToast(message, 'success');
        this.resetForm();
        this.closeForm();
        this.loadEmployees();
      },
      error: (err) => {
        console.error('Failed to add employee', err);
        const errorMsg = err?.error?.message || 'Unable to add employee. Please try again.';
        this.showToast(errorMsg, 'error');
      }
    }); 
  }

  private showToast(message: string, type: Toast['type']) {
    this.toast.set({ message, type });
    setTimeout(() => {
      this.toast.set(null);
    }, 3500);
  }

  private resetForm() {
    this.newEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      userName: '',
      role: '',
      searchText: 'test',
      embeddingJson: 'test',
    };
  }

  deleteCustomer(id: string | undefined) {
    if (!id) {
      this.showToast('Invalid employee ID.', 'error');
      return;
    }

    if (confirm('Are you sure you want to delete this employee?')) {
      this.master.deleteCustomer(id).subscribe({
        next: () => {
          debugger
          this.showToast('Employee deleted successfully!', 'success');
          this.loadEmployees();
        },
        error: (err) => {
          debugger
          console.error('Failed to delete employee', err);
          const errorMsg = err?.error?.message || 'Unable to delete employee. Please try again.';
          this.showToast(errorMsg, 'error');
        }
      });
    }
  }

  editEmployee(emp: Customer) {
    // Implement edit functionality here
    alert(`Edit functionality for ${emp.firstName} ${emp.lastName} is not implemented yet.`);
  } 

  private closeForm() {
    const checkbox = document.getElementById('addToggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  imports: [],
  templateUrl: './employeelist.html',
  styleUrl: './employeelist.css',
})
export class Employeelist {}
>>>>>>> c3e3efb7eac1a9bd416c55197f2aeb30a9f3fa31
