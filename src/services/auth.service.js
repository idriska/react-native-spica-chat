import {DataService} from './data.service';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';

export class AuthService {
  constructor() {}
  async getToken() {
    let token = await AsyncStorage.getItem('spica_token');
    return token;
  }

  async getDecodeToken() {
    let decoded;
    let token = await this.getToken();

    if (token) {
      try {
        decoded = jwt_decode(token);
      } catch (error) {
        console.log('Jwt error ', error);
      }
    }
    return decoded;
  }

  async getIdentityId() {
    let decodedToken = await this.getDecodeToken();
    let identity = decodedToken ? decodedToken._id : null;
    return identity;
  }
}
