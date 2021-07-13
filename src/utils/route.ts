export type availableRole = 'admin' | 'employee' | 'customer';

export function getReferrerRoute(role: availableRole | undefined): string {
  switch (role) {
    case 'admin':
      return '/employee';
    case 'employee':
      return '/employee';
    case 'customer':
      return '/customer';
    default:
      return '/auth/logout';
  }
}
