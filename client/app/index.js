// import styles
import './styles/app.scss'

// import babel polyfill
import 'babel-core/polyfill'

// import main app
import React from 'react'
import MainApp from './components/mainApp'

React.render(
  <MainApp/>,
  document.getElementById('react')
);
