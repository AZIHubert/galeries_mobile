import { SEND_RESET_PASSWORD_SET } from '#store/actions';

import reducer from '../index';

describe('sendResetPassword', () => {
  describe('reducer', () => {
    it('should set initial state', () => {
      expect(reducer(undefined, {
        type: '@@INIT',
      })).toEqual({
        errors: {
          email: '',
        },
        status: 'pending',
      });
    });
    it('should set error', () => {
      const email = 'password';
      expect(reducer(
        undefined, {
          payload: {
            data: {
              errors: {
                email,
              },
            },
          },
          type: SEND_RESET_PASSWORD_SET,
        },
      )).toEqual({
        errors: {
          email,
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
          type: SEND_RESET_PASSWORD_SET,
        },
      )).toEqual({
        errors: {
          email: '',
        },
        status,
      });
    });
  });
});
