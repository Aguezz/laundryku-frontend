/* eslint-disable prettier/prettier */
import React from 'react';

const AutoRedirect = React.lazy(() => import('./components/Route/AutoRedirect'));
const CustomerAccount = React.lazy(() => import('./pages/customer/Account'));
const CustomerLaundry = React.lazy(() => import('./pages/customer/Laundry'));
const CustomerHistory = React.lazy(() => import('./pages/customer/History'));
const CustomerHome = React.lazy(() => import('./pages/customer/Home'));
const EmployeeHome = React.lazy(() => import('./pages/employee/Home'));
const ForgotPasswordPage = React.lazy(() => import('./pages/auth/ForgotPassword'));
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'));
const LogoutPage = React.lazy(() => import('./pages/auth/LogoutPage'));

interface Route {
  exact: boolean;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const publicRoutes: Array<Route> = [
  { path: '/', exact: true, component: AutoRedirect },
  { path: '/auth/logout', exact: true, component: LogoutPage },
];

export const guestRoutes: Array<Route> = [
  { path: '/auth/login', exact: true, component: LoginPage },
  { path: '/auth/forgot-password', exact: true, component: ForgotPasswordPage },
];

export const employeeRoutes: Array<Route> = [
  { path: '/employee', exact: true, component: EmployeeHome },
];

export const customerRoutes: Array<Route> = [
  { path: '/customer', exact: true, component: CustomerHome },
  { path: '/customer/laundry', exact: true, component: CustomerLaundry },
  { path: '/customer/history', exact: true, component: CustomerHistory },
  { path: '/customer/account', exact: true, component: CustomerAccount },
];
