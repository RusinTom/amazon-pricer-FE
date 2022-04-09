import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Example from '@/features/example/Example'
import ExamplePrivate from '@/features/example/ExamplePrivate'
import { EXAMPLEPRIVATE, ROOT } from '@/routes/CONSTANTS'
import { NotFound } from '@/routes/NotFound'

import PrivateRoute from './Auth/PrivateRoute'

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Example />} />
      <Route
        path={EXAMPLEPRIVATE}
        element={
          <PrivateRoute path={EXAMPLEPRIVATE}>
            <ExamplePrivate />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
