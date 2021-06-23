export type availableRole = 'admin' | 'employee' | 'customer';

export function getReferrerRoute(role: availableRole | undefined): string {
  switch (role) {
    case 'admin':
      return '/home';
    case 'employee':
      return '/home';
    case 'customer':
      return '/home';
    default:
      return '/auth/logout';
  }
}
