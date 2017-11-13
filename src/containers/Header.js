import React from 'react'


class Header extends React.Component {
  render() {
    const style = {
        color: "white",
        padding: "1vh",
        "textAlign": "center",
        "backgroundColor": "#be57ff",
        margin: 0
    }
    return (
      <h3 style={ style }>Kaeru Timer</h3>
    )
  }
}

export default Header
