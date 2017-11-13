import React from 'react'
import { connect } from 'react-redux'
import playWhiteImage from '../assets/playWhite.png';
import haltWhiteImage from '../assets/haltWhite.png';
import stopWhiteImage from '../assets/stopWhite.png';
import checkWhiteImage from '../assets/checkWhite.png';
import { startTimer, changeMainButtonToCheck, checkTime, haltTimer, stopTimer } from '../actions/button'
import { ButtonState } from '../states/timer'


const ButtonStyle = {
  display: "table",
  padding: "2vh 1vw",
  margin: "0 auto"
}

const size = 180
const howBig = 20

const imageStyle = {
  "minWidth": `${size}px`, "minHeight": `${size}px`,
  height: `${size}px`, margin: "1vw",
  padding: `${howBig/2}px 0`,
  visible: "true"
}
const playStyle = {
  "minWidth": `${size+howBig}px`, "minHeight": `${size+howBig}px`,
  margin: "1vw"
}

class Button extends React.Component {
  onPlay() {
    this.props.startTimer()
  }

  onCheck() {
    this.props.checkTime()
  }

  onHalt() {
    this.props.haltTimer()
  }

  onStop() {
    this.props.stopTimer()
  }

  render() {
    const { timer } = this.props

    return (
      <div style={ButtonStyle}>
        <div style={{ display: "flex" }}>
          {timer.buttonState === ButtonState.STOPPED
            ? <img alt="" src={playWhiteImage} onClick={() => this.onPlay()} style={playStyle} />
            : <img alt="" src={checkWhiteImage} onClick={() => this.onCheck()} style={playStyle} />
          }
          <img alt="" src={haltWhiteImage} onClick={() => this.onHalt()} style={Object.assign({ visibility: timer.buttonState === ButtonState.STARTED ? "visible" : "hidden" }, imageStyle)} />
          <img alt="" src={stopWhiteImage} onClick={() => this.onStop()} style={imageStyle} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  timer: state.timer
})
const mapDispatchToProps = {
  startTimer,
  changeMainButtonToCheck,
  checkTime,
  haltTimer,
  stopTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
