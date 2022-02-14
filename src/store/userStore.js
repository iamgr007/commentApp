import { extendObservable } from 'mobx';


class UserStore {
  constructor() {
    extendObservable(this, {

      loding: true,
      isloggedIn: false,
      username: ''
    })
  }
}

export default new UserStore();
