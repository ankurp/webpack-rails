import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Hello } from './Hello';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
