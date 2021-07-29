import { reducer, StateType, TOGGLE__CONSTANT } from "./reducer"

test('reduce should be true', () => {

  const state: StateType = {
    collapsed: false
  }
  const newState = reducer(state, {type: TOGGLE__CONSTANT})

  expect(newState.collapsed).toBe(true);
})


test('reduce should be false', () => {

  const state: StateType = {
    collapsed: true
  }
  const newState = reducer(state, {type: TOGGLE__CONSTANT})

  expect(newState.collapsed).toBe(false);
})