/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { StrictMode } from 'react'
import App from './client/App'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('battleship-root')
)

if (Boolean(import.meta.hot)) {
  import.meta.hot.accept()
}
