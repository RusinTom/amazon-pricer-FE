const useAuth = () => {
  const state = {
    status: 'success',
    user: { userName: 'Tomasz', token: 'token123' }
  }

  const isPending = state.status === 'pending'
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'
  const isAuthenticated = state.user && isSuccess

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated
  }
}

export default useAuth
