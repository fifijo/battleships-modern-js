import React, { StrictMode } from 'react'
import App from './client/App'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('battleship-root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
