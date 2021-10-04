import {SpicaClient} from './spica.facade';
import {environment} from '../utils/environment';

export class DataService {
  spicaClient = new SpicaClient(
    environment.PUBLIC_URL,
    environment.API_KEY,
    this.httpClient,
  );

  bucket = environment.BUCKETS;

  resources = {
    user: this.spicaClient.createResource(this.bucket.user),
    chat: this.spicaClient.createResource(this.bucket.chat),
  };

  constructor(httpClient) {}
}
