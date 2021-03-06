import {DataService} from './data.service';
import {AuthService} from './auth.service';

export class UserService {
  dataService = new DataService();
  authService = new AuthService();
  constructor() {}

  getActiveUser = async () => {
    let identity_id = await this.authService.getIdentityId();
    try {
      const user = await this.dataService.resources.user.getAll({
        queryParams: {filter: {identity: identity_id}},
      });
      return user[0];
    } catch (error) {
      console.log('Error', error);
    }
  };
}
