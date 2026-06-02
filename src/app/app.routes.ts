import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Header } from './pages/header/header';
import { Employeelist } from './pages/employeelist/employeelist';
import { Department } from './pages/department/department';
import { Designation } from './pages/designation/designation';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: Login

    }, {
        path: '',
        component: Header,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },{
                path:'employee-list',
                component:Employeelist
            },{
                path:'department',
                component:Department
            },{
                path:'desognation',
                component:Designation
            }
        ]
    }


];
