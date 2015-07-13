import 'babel-core/polyfill'

import './styles/app.scss'

import React from 'react'
import MainApp from './components/'

React.render(
  <MainApp/>,
  document.getElementById('react')
);
