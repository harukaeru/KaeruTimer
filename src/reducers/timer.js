import _ from 'lodash'
import { START_COUNT_UP, CHANGE_MAIN_BUTTON_TO_CHECK, CHECK_TIME, TICK_TIME, HALT_TIMER, STOP_TIMER } from '../actions/button'
import { ButtonState } from '../states/timer'
import { getCurrentUnixTime } from '../utils/dateUtil'

const initialState = {
  buttonState: ButtonState.STOPPED,
  elapsedTime: 0,
  elapsedTimeWhenChecking: 0,
  lapTime: 0,
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case START_COUNT_UP: {
      const currentUnixTime = getCurrentUnixTime()

      let clonedState = _.cloneDeep(state)
      clonedState.baseUnixTime = currentUnixTime - state.elapsedTime
      clonedState.buttonState = ButtonState.STARTED
      return clonedState
    }

    case CHECK_TIME: {
      const currentUnixTime = getCurrentUnixTime()
      const elapsedTime = currentUnixTime - state.baseUnixTime

      let clonedState = _.cloneDeep(state)
      clonedState.lapTime = elapsedTime - state.elapsedTimeWhenChecking
      clonedState.elapsedTimeWhenChecking = elapsedTime

      clonedState.elapsedTime = elapsedTime
      return clonedState
    }

    case TICK_TIME: {
      const currentUnixTime = getCurrentUnixTime()
      const elapsedTime = currentUnixTime - state.baseUnixTime

      let clonedState = _.cloneDeep(state)

      clonedState.elapsedTime = elapsedTime
      return clonedState
    }

    case HALT_TIMER: {
      const currentUnixTime = getCurrentUnixTime()
      const elapsedTime = currentUnixTime - state.baseUnixTime

      let clonedState = _.cloneDeep(state)
      clonedState.lapTime = elapsedTime - state.elapsedTimeWhenChecking
      clonedState.elapsedTimeWhenChecking = elapsedTime
      clonedState.buttonState = ButtonState.STOPPED

      clonedState.elapsedTime = elapsedTime
      return clonedState
    }

    case STOP_TIMER: {
      return initialState
    }

    default:
  }
  return state
}

export default timer
