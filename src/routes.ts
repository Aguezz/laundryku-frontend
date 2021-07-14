/* eslint-disable prettier/prettier */
import AutoRedirect from'./components/Route/AutoRedirect'
import CustomerAccount from'./pages/customer/Account'
import CustomerDaftarHarga from'./pages/customer/DaftarHarga'
import CustomerHistory from'./pages/customer/History'
import CustomerHome from'./pages/customer/Home'
import CustomerLaundry from'./pages/customer/Laundry'
import CustomerMauNyuci from'./pages/customer/MauNyuci'
import EmployeeHome from'./pages/employee/Home'
import ForgotPasswordPage from'./pages/auth/ForgotPassword'
import LoginPage from'./pages/auth/LoginPage'
import LogoutPage from'./pages/auth/LogoutPage'

interface Route {
  exact: boolean;
  path: string;
  component: () => JSX.Element | null;
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

  { path: '/customer/mau-nyuci', exact: true, component: CustomerMauNyuci },
  { path: '/customer/daftar-harga', exact: true, component: CustomerDaftarHarga },
];
