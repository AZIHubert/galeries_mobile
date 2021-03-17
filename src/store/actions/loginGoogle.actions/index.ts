import * as Google from 'expo-google-app-auth';

export const LOGIN_GOOGLE = '[GOOGLE LOGIN]';

export const LOGIN_GOOGLE_FETCH = `${LOGIN_GOOGLE} Fetch`;

export const fetchLoginGoogle: (
  data: Google.GoogleUser,
) => store.ActionI = (
  data,
) => ({
  payload: { data },
  type: LOGIN_GOOGLE_FETCH,
});
