import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync((data) => userApi.signUp(data), false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}