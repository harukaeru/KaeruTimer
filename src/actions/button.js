import { ButtonState } from '../states/timer'
import { wait } from '../utils/asyncUtil'


export const START_COUNT_UP = 'START_COUNT_UP'
export const startCountUp = () => ({
  type: START_COUNT_UP,
})

export const CHANGE_MAIN_BUTTON_TO_CHECK = 'CHANGE_MAIN_BUTTON_TO_CHECK'
export const changeMainButtonToCheck = () => ({
  type: CHANGE_MAIN_BUTTON_TO_CHECK
})

export const CHECK_TIME = 'CHECK_TIME'
export const checkTime = () => ({
  type: CHECK_TIME
})

export const TICK_TIME = 'TICK_TIME'
export const tickTime = () => ({
  type: TICK_TIME
})

const tick = (dispatch, getState) => {
  wait(90).then(() => {
    const { timer } = getState()
    if (timer.buttonState === ButtonState.STARTED) {
      dispatch(tickTime())
      tick(dispatch, getState)
    }
  })
}

export const startTimer = () => {
  return (dispatch, getState) => {
    dispatch(startCountUp())
    tick(dispatch, getState)
  }
}

export const HALT_TIMER = 'HALT_TIMER'
export const haltTimer = () => ({
  type: HALT_TIMER
})

export const STOP_TIMER = 'STOP_TIMER'
export const stopTimer = () => ({
  type: STOP_TIMER
})

