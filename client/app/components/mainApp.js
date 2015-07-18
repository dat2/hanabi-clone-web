import React from 'react'

import redux from '../constants/redux'
import { Provider } from 'redux/react'

import { bindActionCreators } from 'redux'
import * as GameActions from '../actions/gameActions'

import App from './app'

class MainApp extends React.Component {
  render() {
    return (
      <Provider redux={redux}>
        { () => <App redux={redux}/> }
      </Provider>
    )
  }
}

export default MainApp
