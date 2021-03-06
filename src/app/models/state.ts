import { IUser } from '../models/user';
export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: IUser | null;
  // error message
  errorMessage: string | null;
}
