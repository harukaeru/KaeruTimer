import React from 'react'


const SubButtonStyle = {
  display: "table",
  padding: "2vh 1vw",
  margin: "0 auto"
}


class SubButton extends React.Component {
  onHalt() {
    console.error('一時的に停止させる')
    console.error('ボタンをスタートへ')
  }

  onStop() {
    console.error('完全に停止させる')
    console.error('初期化')
    console.error('ボタンをスタートへ')
  }
  render() {
    const style = { width: "10vw" }
    return (
    )
  }
}

export default SubButton
