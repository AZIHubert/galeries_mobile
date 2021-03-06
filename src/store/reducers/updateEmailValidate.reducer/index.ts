import { UPDATE_EMAIL_VALIDATE_SET } from '#store/actions';

interface InitialStateI {
  errors: form.UpdateEmailI,
  status: store.Status,
}

const initialState: InitialStateI = {
  errors: {
    password: '',
  },
  status: 'pending',
};

export default (
  state = initialState,
  action: store.ActionI,
) => {
  switch (action.type) {
    case UPDATE_EMAIL_VALIDATE_SET:
      return {
        ...state,
        ...action.payload ? action.payload.data : undefined,
        errors: {
          ...state.errors,
          ...action.payload ? action.payload.data.errors : undefined,
        },
      };
    default:
      return state;
  }
};
