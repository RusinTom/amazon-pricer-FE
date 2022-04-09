import { render } from '@testing-library/react'
import { DefaultRequestBody, rest } from 'msw'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const handlers = [
  rest.get<DefaultRequestBody>(`https://example.com`, (req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json({
        message: 'Example response'
      })
    )
  })
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      )
  }
}
