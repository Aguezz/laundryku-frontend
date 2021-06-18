import Role from './role.model';

export default interface User {
  id?: string;
  username?: string;
  email?: string;
  role?: Role;
}
