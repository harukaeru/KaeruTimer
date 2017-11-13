import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import Time from './Time'
import Button from './Button'
import '../styles/AppStyle.css'

export default class Root extends React.Component {
  render() {
    const { store } = this.props

    return (
    <Provider store={store}>
      <div>
        <Header />
        <Time />
        <Button />
      </div>
    </Provider>
    )
  }
}
