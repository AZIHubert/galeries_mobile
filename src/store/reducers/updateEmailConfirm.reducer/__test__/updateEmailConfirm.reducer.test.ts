import reducer from '../index';

import {
  UPDATE_EMAIL_CONFIRM_SET,
} from '#store/actions';

describe('updateEmailConfirm', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {
        type: '@@INIT',
      })).toEqual({
        errors: {
          email: '',
          password: '',
        },
        status: 'pending',
      });
    });
    it('should set errors', () => {
      const password = 'newPassword';
      expect(reducer(
        undefined, {
          payload: {
            data: {
              errors: {
                password,
              },
            },
          },
          type: UPDATE_EMAIL_CONFIRM_SET,
        },
      )).toEqual({
        errors: {
          email: '',
          password,
        },
        status: 'pending',
      });
    });
    it('should set status', () => {
      const status = 'success';
      expect(reducer(
        undefined, {
          payload: {
            data: {
              status,
            },
          },
          type: UPDATE_EMAIL_CONFIRM_SET,
        },
      )).toEqual({
        errors: {
          email: '',
          password: '',
        },
        status,
      });
    });
  });
});
