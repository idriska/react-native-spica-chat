import {DataService} from './data.service';
import {UserService} from './user.service';

export class ChatService {
  dataService = new DataService();
  userService = new UserService();
  me;

  constructor() {
    this.initialize();
  }

  async initialize() {
    this.me = await this.userService.getActiveUser();
  }

  getChatByUserWithMe = id => {
    return this.dataService.resources.chat.getAll({
      queryParams: {
        filter: {
          $and: [
            {last_active: {$elemMatch: {user: id}}},
            {last_active: {$elemMatch: {user: this.me._id}}},
            {last_active: {$size: 2}},
            {is_group: false},
          ],
        },
      },
    });
  };
}
