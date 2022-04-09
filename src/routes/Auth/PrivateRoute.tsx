import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

const PrivateRoute: FC<{ path: string }> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <>{children}</> : <Navigate replace to="/login" />
}
export default PrivateRoute
