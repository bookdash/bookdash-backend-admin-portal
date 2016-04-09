import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {BookDashAdminApp} from '../app/book-dash-admin';

beforeEachProviders(() => [BookDashAdminApp]);

describe('App: BookDashAdmin', () => {
  it('should have the `defaultMeaning` as 42', inject([BookDashAdminApp], (app: BookDashAdminApp) => {
    //expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([BookDashAdminApp], (app: BookDashAdminApp) => {
      //expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      //expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

