import './main.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app/store'

import App from './App'
import { GlobalStyles } from '@/styles/GlobalStyles'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
