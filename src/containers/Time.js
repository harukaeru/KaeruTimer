import React from 'react'
import { connect } from 'react-redux'
import '../styles/ClockStyle.css'


const numToNameTable = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero'
}

const TimeStyle = {
  display: "table",
  padding: "2vh 1vw",
  margin: "0 auto"
}

const convertSecondsToHMS = (milliSeconds) => {
  const displayMilliseconds = Math.floor(milliSeconds / 10) % 100
  const totalSeconds = Math.floor(milliSeconds / 1000)

  const displaySeconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const displayMinutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const displayHours = totalHours % 100

  return {
    hours: displayHours, minutes: displayMinutes,
    seconds: displaySeconds, milliseconds: displayMilliseconds
  }
}

class Time extends React.Component {
  createDigit(number) {
    const digitName = numToNameTable[number]

    return <div className={'digit ' + digitName} />
  }

  zeroPad(number) {
    return number.toString().padStart(2, '0')
  }

  createTime(timeObj) {
    const hoursString = this.zeroPad(timeObj.hours)
    const minutesString = this.zeroPad(timeObj.minutes)
    const secondsString = this.zeroPad(timeObj.seconds)
    const millisecondsString = this.zeroPad(timeObj.milliseconds)

    return (
      <div>
        { this.createDigit(hoursString[0]) }
        { this.createDigit(hoursString[1]) }
        { <div className={'colon'} /> }
        { this.createDigit(minutesString[0]) }
        { this.createDigit(minutesString[1]) }
        { <div className={'colon'} /> }
        { this.createDigit(secondsString[0]) }
        { this.createDigit(secondsString[1]) }
        { <div className={'colon'} /> }
        { this.createDigit(millisecondsString[0]) }
        { this.createDigit(millisecondsString[1]) }
      </div>
    )
  }

  setElapsedDisplayTime(timer) {
    if (!timer.elapsedTime) {
      this.elapsedTime = convertSecondsToHMS(0)
      return
    }
    this.elapsedTime = convertSecondsToHMS(timer.elapsedTime)
  }

  setElapsedWhenCheckingDisplayTime(timer) {
    if (!timer.elapsedTimeWhenChecking) {
      this.elapsedTimeWhenChecking = convertSecondsToHMS(0)
      return
    }
    this.elapsedTimeWhenChecking = convertSecondsToHMS(timer.elapsedTimeWhenChecking)
  }

  setLapDisplayTime (timer) {
    if (!timer.lapTime) {
      this.lapTime = convertSecondsToHMS(0)
      return
    }
    console.log('lap')
    console.log(timer.lapTime)
    this.lapTime = convertSecondsToHMS(timer.lapTime)
  }

  render() {
    const labelStyle = {
      'color': 'white',
      'fontSize': 'x-large',
      'padding': '0 2vw'
    }

    const { timer } = this.props
    this.setElapsedDisplayTime(timer)
    this.setElapsedWhenCheckingDisplayTime(timer)
    this.setLapDisplayTime(timer)

    return (
      <div style={TimeStyle}>
        <table className={'clock-body'}>
          <tbody>
            <tr><td style={labelStyle}>Current Time</td><td>{this.createTime(this.elapsedTime)}</td></tr>
            <tr><td style={labelStyle}>Current Lap Time</td><td>{this.createTime(this.elapsedTimeWhenChecking)}</td></tr>
            <tr><td style={labelStyle}>Previous Lap Time</td><td>{this.createTime(this.lapTime)}</td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  timer: state.timer
})

export default connect(mapStateToProps)(Time)
