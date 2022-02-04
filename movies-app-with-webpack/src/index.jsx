import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './Storage'
import { Provider } from 'react-redux'

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById("root"));