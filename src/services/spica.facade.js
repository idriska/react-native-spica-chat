import * as Bucket from '@spica-devkit/bucket';
import AsyncStorage from '@react-native-community/async-storage';

export class SpicaClient {
  apiUrl;
  visitorApiKey;
  constructor(api, visitorApiKey, http) {
    this.apiUrl = api;
    this.visitorApiKey = visitorApiKey;
  }
  createResource(bucket) {
    return new SpicaResource(bucket, this);
  }
}

export class SpicaCloudFunction {
  constructor(functionName, spicaClient) {}

  post() {
    return params => {
      return this.spicaClient.http.post(
        `${this.spicaClient.apiUrl}fn-execute/${this.functionName}`,
        params,
      );
    };
  }
}

export class SpicaResource {
  resourceBucketId;
  spicaClient = new SpicaClient();
  constructor(resourceBucketId, spicaClient) {
    this.resourceBucketId = resourceBucketId;
    this.init();
  }

  async init() {
    let initializeConfig;
    let spica_token = await AsyncStorage.getItem('spica_token');
    if (spica_token) {
      initializeConfig = {
        publicUrl: this.spicaClient.apiUrl,
        identity: spica_token,
      };
    } else {
      initializeConfig = {
        publicUrl: 'https://test-4061d.hq.spicaengine.com/api', //this.spicaClient.apiUrl,
        apikey: '5ks9718kiybw51i', // this.spicaClient.visitorApiKey,
      };
    }
    Bucket.initialize(initializeConfig);
  }

  post(data) {
    this.init();
    data = this.normalizeData(data);
    return Bucket.data.insert(this.resourceBucketId, data);
  }

  get(documentId, options) {
    this.init();
    return Bucket.data.get(this.resourceBucketId, documentId, options);
  }

  getAll(options) {
    this.init();
    return Bucket.data.getAll(this.resourceBucketId, options);
  }

  update(documentId, data) {
    this.init();
    data = this.normalizeData(data);
    return Bucket.data.update(this.resourceBucketId, documentId, data);
  }

  remove(documentId) {
    this.init();
    return Bucket.data.remove(this.resourceBucketId, documentId);
  }

  patch(documentId, data) {
    this.init();
    data = this.normalizeData(data);
    return Bucket.data.patch(this.resourceBucketId, documentId, data);
  }

  getRealtime(documentId) {
    this.init();
    return Bucket.data.realtime.get(this.resourceBucketId, documentId);
  }

  getAllRealtime(queryParams) {
    this.init();
    return Bucket.data.realtime.getAll(this.resourceBucketId, queryParams);
  }

  normalizeData(originalData) {
    let data = {...originalData};
    Object.entries(data).forEach(([field, value]) => {
      if (data[field] && data[field][0] && data[field][0]._id) {
        data[field] = data[field].map(item => item._id);
      }
      if (data[field] && data[field]._id) {
        data[field] = data[field]._id;
      }
    });
    return data;
  }
}
