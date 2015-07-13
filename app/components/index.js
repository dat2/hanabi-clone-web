import React from 'react'

import { createRedux } from 'redux'
import { Provider } from 'redux/react'
import * as stores from '../stores/index'

import App from './app'

const redux = createRedux(stores)

class MainApp extends React.Component {
  render() {
    return (
      <Provider redux={redux}>
        {() =>
          <App />
        }
      </Provider>
    )
  }
}

export default MainApp
