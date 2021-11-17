class StorageService {
  [name: string]: any;
  private _local;
  private _session;
  constructor() {
    this._local = new StorageWrapper(localStorage);
    this._session = new StorageWrapper(sessionStorage);
  }
  get local() {
    return this._local;
  }
  get session() {
    return this._session;
  }
}

class StorageWrapper {
  private webStorge: Storage;
  constructor(webStorge: Storage) {
    this.webStorge = webStorge;
  }

  set(key: string, value: any) {
    if (typeof value === "function") {
      throw new Error("not support type of function value");
    }
    if (!key) {
      throw new Error("Key is required");
    }
    this.webStorge.setItem(key, value);
  }
  get(key: string) {
    const value = this.webStorge.getItem(key);
    if (value === null) {
      return value;
    }

    if (value === "undefined") {
      return undefined;
    }

    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }
  clear() {
    this.webStorge.clear();
  }
  remove(key: string) {
    this.webStorge.removeItem(key);
  }
}
const store = new StorageService();
export default store;
