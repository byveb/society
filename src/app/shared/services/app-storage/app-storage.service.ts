import { Injectable } from '@angular/core';
import { Utilities } from '@app/utilities/utilities';
import { environment } from 'environments/environment';
import { AppLoggerService } from '..';

const APP_PREFIX = environment.localStoreName;

@Injectable()
export class AppStorageService {

  constructor(private logger: AppLoggerService) { }

  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map((key) =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0).toUpperCase() + token.slice(1)
              )
              .join('')
          );
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(
              localStorage.getItem(storageKey) || '{}'
            );
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string): any {
    let _val = localStorage.getItem(`${APP_PREFIX}${key}`);
    try {
      _val = (_val) ? JSON.parse(_val || '{}') : _val;
    } catch (err: any) {
      this.logger.err(err.message, err, { "data": _val });
    };
    return _val;
  }

  getTypeItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}') as T;
  }

  updateObjectItem(key: string, value: any) {
    let item = this.getItem(key);
    if (item && typeof JSON.parse(item) == "object") {
      let _val = Utilities.updateObject(item, key, value);
      localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(_val));
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  /** Tests that localStorage exists, can be written to, and read from. */
  testLocalStorage() {
    const testValue = 'testValue';
    const testKey = 'testKey';
    const errorMessage = 'localStorage did not return expected value';

    this.setItem(testKey, testValue);
    const retrievedValue = this.getItem(testKey);
    this.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
