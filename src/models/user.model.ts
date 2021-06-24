import Role from './role.model';

export default interface User {
  id?: string;
  username?: string;
  email?: string;
  name?: string;
  phone_number?: string;
  profile_photo?: string;
  address?: string;
  role?: Role;
}
