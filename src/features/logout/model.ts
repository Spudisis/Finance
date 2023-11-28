import { makeAutoObservable } from 'mobx';

class Logout {
  constructor() {
    makeAutoObservable(this, {});
  }
  logout() {
    console.log('call api or clear data about user');
  }
}

export const LogoutInstance = new Logout();
